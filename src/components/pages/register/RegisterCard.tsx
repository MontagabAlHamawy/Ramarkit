'use client'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import Link from "next/link"

export default function RegisterCard() {
    const [pass, setPass] = useState(true)
    const [confPass, setConfPass] = useState(true)
    const [tap, setTap] = useState(false);
    return (
        <>
            {!tap ? (
                <Card className="md:mx-auto w-full md:w-[50%] xl:w-[35%] ">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl font-bold">Register</CardTitle>
                        <CardDescription>Create a New Account</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" type="text" placeholder="Enter your Name" required />
                            </div>
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
                            <div className="space-y-2">
                                <Label htmlFor="confirm-password">Confirm Password</Label>
                                <div className="relative">
                                    <Input id="confirm-password" type={confPass ? "password" : "text"} required placeholder="Enter your password again" />
                                    {confPass ? <Eye onClick={() => setConfPass(false)} size={20} className="absolute top-[22%] right-5 text-muted-foreground" /> : <EyeOff onClick={() => setConfPass(true)} size={20} className="absolute top-[22%] right-5 text-muted-foreground" />}
                                </div>
                            </div>
                            <Button onClick={() => setTap(true)} type="submit" className="w-full cursor-pointer">
                                Register
                            </Button>
                            <div className="flex justify-between items-center">
                                <Link href={'/login'} className="text-muted-foreground underline underline-offset-1 text-sm">Already registered</Link>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ) : (
                <Card className="md:mx-auto w-full md:w-[50%] xl:w-[35%]">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl font-bold">Register</CardTitle>
                        <CardDescription>Create a New Account</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <p className="text-foreground text-sm text-center  px-10">Thank you for joining us ,Your request is currently being processed </p>
                            </div>
                            <Button asChild type="submit" className="w-full cursor-pointer">
                                <Link href={'/'}>
                                    Go Back
                                </Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            )}
        </>
    )
}
