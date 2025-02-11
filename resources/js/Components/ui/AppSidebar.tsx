
import {  Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    } from "./sidebar";
import {  Home,Headset ,Images,BookImage,Video,BookType,UserPen,Mails} from "lucide-react"
import { Link,usePage } from "@inertiajs/react";

export function AppSidebar() {
    const items = [
        {
          title: "Galery Joel",
          url: "galeryjoel",
          icon: Images,
        },
        {
          title: "Galery Etudian",
          url: "galeryetudian",
          icon: Images,
        },
        {
          title: "Album client",
          url: "album",
          icon: BookImage,
        },
        {
          title: "Video",
          url: "video",
          icon: Video,
        },
        {
          title: "Mes cours",
          url: "course",
          icon: BookType,
        },
        {
          title: "Marketing",
          url: "marketing",
          icon: Mails,
        },
        {
          title: "Profile",
          url: "profile",
          icon: UserPen,
        },
        
      ]
      const { url } = usePage();  
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Administration</SidebarGroupLabel>
          <SidebarGroupContent>
          <SidebarMenuItem className="list-none ml-2">
                <div className="flex items-center"><Home size={18}/><span className="ml-2">Acceuil</span></div>
                <SidebarMenuSub>
                    <SidebarMenuButton className={url === '/homeimage' ? 'bg-slate-800 ' : ''} asChild>
                        <Link href="homeimage" className="flex items-center">
                          <Images />
                          <span className="ml-2">Image de fond</span>
                        </Link>
                    </SidebarMenuButton>  
                    <SidebarMenuButton className={url === '/homevideo' ? 'bg-slate-800 ' : ''} asChild>
                        <Link href="homevideo" className="flex items-center">
                          <Video />
                          <span className="ml-2">Video d'en-tête</span>
                        </Link>
                    </SidebarMenuButton>  
                    <SidebarMenuButton className={url === '/homementor' ? 'bg-slate-800 ' : ''} asChild>
                        <Link href="homementor" className="flex items-center">
                          <Images />
                          <span className="ml-2">image mentor</span>
                        </Link>
                    </SidebarMenuButton>  
                    <SidebarMenuButton className={url === '/homedemolesson' ? 'bg-slate-800 ' : ''} asChild>
                        <Link href="homedemolesson" className="flex items-center">
                          <Images />
                          <span className="ml-2">image demo lesson</span>
                        </Link>
                    </SidebarMenuButton>  
                    <SidebarMenuButton className={url === '/homecertification' ? 'bg-slate-800 ' : ''} asChild>
                        <Link href="homecertification" className="flex items-center">
                          <Images />
                          <span className="ml-2">image certification</span>
                        </Link>
                    </SidebarMenuButton>  
                    <SidebarMenuButton className={url === '/homestudent' ? 'bg-slate-800 ' : ''} asChild>
                        <Link href="homestudent" className="flex items-center">
                          <Images />
                          <span className="ml-2">image etudient</span>
                        </Link>
                    </SidebarMenuButton>  
                </SidebarMenuSub>
            </SidebarMenuItem>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} className={url == '/'+item.url ? 'bg-slate-800' : ''}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>

            <SidebarMenu className="mt-40">
               <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                  <Link  href={route('logout')} method="post" as="button" className="bg-red-600 text-black">Deconnexion</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

      </SidebarContent>
    </Sidebar>
  )
}
