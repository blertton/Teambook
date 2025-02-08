import { SidebarProvider } from "@/components/ui/sidebar/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar/sidebar";
import AlertDemo from "@/components/alertDemo";
import { MultiSelect } from "@/components/multiselect";
import { Component as PieChart } from "@/components/pieChart";

async function fetchCountries() {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/all?fields=name,cca3`
    );

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error("Invalid API response format");
    }

    return data
      .map((country: any) => ({
        value: String(country.cca3 || "").trim(),
        label: String(country.name?.common || "").trim(),
      }))
      .filter((option) => option.value.length === 3 && option.label.length > 0)
      .sort((a, b) => a.label.localeCompare(b.label));
  } catch (error) {
    console.error("Failed to fetch countries:", error);
    return [];
  }
}

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger />
      <main className="p-4 md:p-6 lg:p-8 flex flex-col gap-4 ml-20">
        <div className="flex-row items-center justify-between gap-4 xl:flex ">
          <AlertDemo />
          <PieChart />
        </div>{" "}
        <h1 className="text-2xl font-semibold text-gray-700">
          Choose a Country
        </h1>
        <div className="flex items-center justify-between gap-4 ">
          <div className="flex-1 max-w-lg">
            <MultiSelect
              options={fetchCountries}
              placeholder="Select countries..."
              onChange={(selected) => console.log(selected)}
              defaultValue={["USA", "FRA"]}
              disabled={false}
            />
          </div>
        </div>
        <div className="max-w-4xl mx-auto w-full">{children}</div>
      </main>
    </SidebarProvider>
  );
}
