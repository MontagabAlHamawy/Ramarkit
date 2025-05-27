'use client'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import Link from "next/link"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

export default function FrorgotPasswordCard() {
    const [tap, setTap] = useState("0")
    const [pass, setPass] = useState(true)
    const [confPass, setConfPass] = useState(true)
    return (
        <>
            {tap === '0' ? (
                <Card className="md:mx-auto w-full md:w-[50%] xl:w-[35%]">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl font-bold">Frorgot Password</CardTitle>
                        <CardDescription>Forgot your password? No problem.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="Enter your email" required />
                            </div>
                            <Button onClick={() => setTap("1")} type="submit" className="w-full cursor-pointer">
                                Send
                            </Button>
                            <div className="flex justify-between items-center">
                                <Link href={'/register'} className="text-muted-foreground underline underline-offset-1 text-sm">Create Account</Link>
                                <Link href={'/login'} className="text-muted-foreground underline underline-offset-1 text-sm">Login</Link>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ) : tap === '1' ? (
                <Card className="md:mx-auto w-full md:w-[50%] xl:w-[35%]">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl font-bold">Frorgot Password</CardTitle>
                        <CardDescription>Forgot your password? No problem.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="otp">OTP</Label>
                                <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS} className="w-full">
                                    <InputOTPGroup className="w-full justify-center">
                                        <InputOTPSlot index={0} className="w-20"/>
                                        <InputOTPSlot index={1} className="w-20" />
                                        <InputOTPSlot index={2} className="w-20" />
                                        <InputOTPSlot index={3} className="w-20" />
                                        <InputOTPSlot index={4} className="w-20" />
                                        <InputOTPSlot index={5} className="w-20" />
                                    </InputOTPGroup>
                                </InputOTP>
                            </div>
                            <Button onClick={() => setTap("2")} type="submit" className="w-full cursor-pointer">
                                Confirm
                            </Button>
                            <div className="flex justify-between items-center">
                                <Link href={'/register'} className="text-muted-foreground underline underline-offset-1 text-sm">Create Account</Link>
                                <Link href={'/login'} className="text-muted-foreground underline underline-offset-1 text-sm">Login</Link>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ) : (
                <Card className="md:mx-auto w-full md:w-[50%] xl:w-[35%]">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl font-bold">Frorgot Password</CardTitle>
                        <CardDescription>Forgot your password? No problem.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="password">New Password</Label>
                                <div className="relative">
                                    <Input id="password" type={pass ? "password" : "text"} required placeholder="Enter your new password" />
                                    {pass ? <Eye onClick={() => setPass(false)} size={20} className="absolute top-[22%] right-5 text-muted-foreground" /> : <EyeOff onClick={() => setPass(true)} size={20} className="absolute top-[22%] right-5 text-muted-foreground" />}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="confirm-password">Confirm Password</Label>
                                <div className="relative">
                                    <Input id="confirm-password" type={confPass ? "password" : "text"} required placeholder="Enter your new password again" />
                                    {confPass ? <Eye onClick={() => setConfPass(false)} size={20} className="absolute top-[22%] right-5 text-muted-foreground" /> : <EyeOff onClick={() => setConfPass(true)} size={20} className="absolute top-[22%] right-5 text-muted-foreground" />}
                                </div>
                            </div>
                            <Button onClick={() => setTap("0")} type="submit" className="w-full cursor-pointer">
                                Update Password
                            </Button>
                            <div className="flex justify-between items-center">
                                <Link href={'/register'} className="text-muted-foreground underline underline-offset-1 text-sm">Create Account</Link>
                                <Link href={'/login'} className="text-muted-foreground underline underline-offset-1 text-sm">Login</Link>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )
            }
        </>
    )
}
