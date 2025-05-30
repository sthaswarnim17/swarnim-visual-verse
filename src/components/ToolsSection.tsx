
import { Card, CardContent } from "@/components/ui/card";

interface ToolCardProps {
  name: string;
  icon: string;
  delay?: string;
  aosDelay?: number;
}

function ToolCard({ name, icon, delay = "0s", aosDelay = 0 }: ToolCardProps) {
  return (
    <Card 
      className="overflow-hidden" 
      style={{ animationDelay: delay }}
      data-aos="fade-up"
      data-aos-delay={aosDelay}
    >
      <CardContent className="flex flex-col items-center justify-center p-6 h-full">
        <div className="w-16 h-16 mb-4 flex items-center justify-center">
          <img src={icon} alt={name} className="w-12 h-12 object-contain" />
        </div>
        <h3 className="font-medium text-center">{name}</h3>
      </CardContent>
    </Card>
  );
}

export function ToolsSection() {
  const tools = [
    {
      name: "Canva",
      icon: "https://cdn-images-1.medium.com/max/1200/1*A6kkoOVJVpXPWewg8axc5w.png",
      delay: "0s",
      aosDelay: 100
    },
    {
      name: "Figma",
      icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
      delay: "0.1s",
      aosDelay: 150
    },
    {
      name: "Filmora",
      icon: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wondershare_filmora_logo.svg",
      delay: "0.2s",
      aosDelay: 200
    },
    {
      name: "Adobe Premiere Pro",
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg",
      delay: "0.3s",
      aosDelay: 250
    },
    {
      name: "DaVinci Resolve",
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/90/DaVinci_Resolve_17_logo.svg",
      delay: "0.4s",
      aosDelay: 300
    },
  ];

  return (
    <section id="tools" className="section-padding bg-secondary/30 dark:bg-muted/10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">Tools I Use</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Designing with passion, precision, and powerful tools.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {tools.map((tool) => (
            <ToolCard
              key={tool.name}
              name={tool.name}
              icon={tool.icon}
              delay={tool.delay}
              aosDelay={tool.aosDelay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
