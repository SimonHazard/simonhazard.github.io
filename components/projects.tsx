import { projects } from "@/lib/constants";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function Projects() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>
              <a href={project.link} className="text-primary hover:underline">
                {project.title}
              </a>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{project.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
