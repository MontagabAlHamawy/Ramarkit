import { Sidebar } from "@/components/layout/Sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SidebarProvider>
                <SidebarTrigger className="fixed top-[68px] !right-1 z-55 cursor-pointer "/>
            <main dir="rtl"  className="w-full p-10 relative">
                {children}
            </main>
            <Sidebar />
        </SidebarProvider>
    )
}