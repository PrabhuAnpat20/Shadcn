import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { resolve } from "path"



interface Recipe{
  title:string,
  image:string,
  time:number,
  description:string,
  vegan:boolean,
  id:string
}
async function getRecipe():Promise<Recipe[]> {
  const result=await fetch("http://localhost:4000/recipes")
  
  await new Promise((resolve)=>setTimeout(resolve,3000))
  return result.json();
}
export default async function Home() {

  const recipes=await getRecipe();
  return (
    <>
    <main>
      <div className="grid grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <Card key={recipe.id} className=" flex flex-col justify-between">
            <CardHeader className=" flex-row gap-4 items-center">
              <Avatar>
                <AvatarImage src={`/img/${recipe.image}`}/>

              </Avatar>
              <div>
                <CardTitle>{recipe.title}</CardTitle>
                <CardDescription>{recipe.time} Time to cook </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>{recipe.description}</p>
            </CardContent>
            <CardFooter  className=" flex justify-between">
              <Button >View Recipe</Button>
              {recipe.vegan && <Badge variant="secondary">vegan</Badge>}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  </>

  );
}
