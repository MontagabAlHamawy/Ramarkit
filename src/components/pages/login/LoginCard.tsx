'use client'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import Link from "next/link"

export default function LoginCard() {
    const [pass, setPass] = useState(true)
    return (
        <Card className="md:mx-auto w-full md:w-[50%] xl:w-[35%] ">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold">Login</CardTitle>
                <CardDescription>Enter your email and password to login to your account</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                            <Input id="password" type={pass ? "password" : "text"} required placeholder="Enter your password" />
                            {pass ? <Eye onClick={() => setPass(false)} size={20} className="absolute top-[22%] right-5 text-muted-foreground" /> : <EyeOff onClick={() => setPass(true)} size={20} className="absolute top-[22%] right-5 text-muted-foreground" />}
                        </div>
                    </div>
                    <Button asChild type="submit" className="w-full cursor-pointer">
                        <Link href={'/dashboard'}>
                            Login
                        </Link>
                    </Button>
                    <div className="flex justify-between items-center">
                        <Link href={'/register'} className="text-muted-foreground underline underline-offset-1 text-sm">Create Account</Link>
                        <Link href={'/forgot-password'} className="text-muted-foreground underline underline-offset-1 text-sm">Forgot your password</Link>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
