import { AppSidebar } from "@/Components/ui/AppSidebar";
import { SidebarProvider,SidebarTrigger } from "@/Components/ui/sidebar";



export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
        {children}
      
      {/* <main>
      <SidebarTrigger />
      </main> */}
    </SidebarProvider>
  )
}
