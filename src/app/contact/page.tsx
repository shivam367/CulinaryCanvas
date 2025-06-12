import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, ExternalLink, ShoppingBag, UtensilsCrossed } from 'lucide-react';
import { SOCIAL_LINKS, SWIGGY_LINK, ZOMATO_LINK, APP_NAME } from '@/lib/constants';
import Link from 'next/link';

const contactDetails = {
  email: "info@culinarycanvas.com",
  phone: "+1 (555) 123-4567",
  addressLine1: "123 Gourmet Street",
  addressLine2: "Foodie City, FC 54321",
  mapsLink: "https://maps.google.com/?q=123+Gourmet+Street+Foodie+City"
};

export default function ContactPage() {
  return (
    <SectionWrapper title="Get In Touch" subtitle={`We'd love to hear from you. Contact us for reservations, inquiries, or just to say hello.`}>
      <div className="grid md:grid-cols-2 gap-12">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="font-headline">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-primary mt-1 shrink-0" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <a href={`mailto:${contactDetails.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {contactDetails.email}
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-primary mt-1 shrink-0" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <a href={`tel:${contactDetails.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {contactDetails.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-primary mt-1 shrink-0" />
              <div>
                <h4 className="font-semibold">Address</h4>
                <p className="text-muted-foreground">{contactDetails.addressLine1}</p>
                <p className="text-muted-foreground">{contactDetails.addressLine2}</p>
                <a href={contactDetails.mapsLink} target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline flex items-center mt-1">
                  View on Map <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="font-headline">Order Online</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button asChild variant="outline" className="w-full justify-start">
                <a href={SWIGGY_LINK} target="_blank" rel="noopener noreferrer">
                  <ShoppingBag className="mr-2 h-5 w-5 text-orange-500" /> Order via Swiggy
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <a href={ZOMATO_LINK} target="_blank" rel="noopener noreferrer">
                  <UtensilsCrossed className="mr-2 h-5 w-5 text-red-500" /> Order via Zomato
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="font-headline">Follow Us</CardTitle>
            </CardHeader>
            <CardContent className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <Button key={social.name} variant="outline" size="icon" asChild>
                  <Link href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                    <social.Icon className="h-5 w-5" />
                  </Link>
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
