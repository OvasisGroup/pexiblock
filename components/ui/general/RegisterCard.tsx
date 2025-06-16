import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import Link from "next/link"

export function RegisterCard() {
  return (
    <div className="flex flex-col w-full mx-auto items-center justify-center h-screen bg-gray-900 text-white p-4">
    <Link href="/"><Image src="/images/pexiblock_logo.svg" alt="Logo" width={200} height={100} className="mb-4" /></Link>

    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-center">Login to your account</CardTitle>
        <CardDescription className="text-center">
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-4">
             <div className="grid gap-2">
              <Label htmlFor="fullname">Full Name</Label>
              <Input
                id="fullname"
                type="text"
                placeholder="Full Names"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full hover:cursor-pointer font-medium">
          Login
        </Button>
        <div className="flex flex-row items-center justify-between gap-2 w-full">
             <a
                  href="#"
                  className="inline-block text-sm underline-offset-4 hover:underline text-center font-bold"
                >
                  Have Account?
                </a>
                 <Link
                  href="/authentication/login"
                  className="inline-block text-sm underline-offset-4 hover:underline text-center font-bold"
                >
                  Login?
                </Link>
        </div>
        
      </CardFooter>
    </Card>
    
    </div>
  )
}
