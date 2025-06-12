import Link from "next/link";
import { APP_NAME, SOCIAL_LINKS, SWIGGY_LINK, ZOMATO_LINK } from "@/lib/constants";
import Logo from "@/components/shared/Logo";
import { Separator } from "@/components/ui/separator";
import { UtensilsCrossed, ShoppingBag } from "lucide-react"; // Using generic icons for Swiggy/Zomato

export function Footer() {
  return (
    <footer className="bg-muted/50 text-muted-foreground mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex flex-col items-center md:items-start">
            <Logo className="h-10 w-auto mb-4" />
            <p className="text-sm text-center md:text-left">
              Experience culinary artistry at {APP_NAME}.
            </p>
          </div>
          
          <div className="flex flex-col items-center space-y-2">
            <h4 className="font-headline text-lg text-foreground mb-2">Order From</h4>
             <div className="flex space-x-4">
                <a href={SWIGGY_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-primary transition-colors">
                  <ShoppingBag className="h-6 w-6 text-orange-500" /> 
                  <span>Swiggy</span>
                </a>
                <a href={ZOMATO_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-primary transition-colors">
                  <UtensilsCrossed className="h-6 w-6 text-red-500" />
                  <span>Zomato</span>
                </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h4 className="font-headline text-lg text-foreground mb-2">Connect With Us</h4>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                  <social.Icon className="h-6 w-6 hover:text-primary transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
          <p className="mt-1">
            Designed with <span className="text-red-500">&hearts;</span> by AI.
          </p>
        </div>
      </div>
    </footer>
  );
}
