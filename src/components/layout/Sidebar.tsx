import {
    Sidebar as SidebarRoot,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar"

export function Sidebar() {
    return (
        <SidebarRoot className="h-[calc(100vh-64px)] top-16 border-l border-foreground/10 border-dashed ">
            <SidebarHeader />
            <SidebarContent>
                <SidebarGroup />
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter />
        </SidebarRoot>
    )
}
