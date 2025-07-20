import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "@/features/api/authApi";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom"; // ✅ Added missing import

const Login = () => {
  const navigate = useNavigate();
  
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [registerUser, { data: registerData, isLoading: registerIsLoading, isSuccess: registerIsSuccess, error: registerError }] = useRegisterUserMutation();
  const [loginUser, { data: loginData, isLoading: loginIsLoading, isSuccess: loginIsSuccess, error: loginError }] = useLoginUserMutation();

  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;
    type === "signup"
      ? setSignupInput((prev) => ({ ...prev, [name]: value }))
      : setLoginInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegistration = async (type) => {
    const inputData = type === "signup" ? signupInput : loginInput;
    const action = type === "signup" ? registerUser : loginUser;
    await action(inputData);
  };

  useEffect(() => {
    if (registerIsSuccess && registerData) {
      toast.success(registerData.message || "Registration successful! Please login.");
    }
    if (registerError) {
      toast.error(registerError.data.message || "Error registering. Try again.");
    }
    if (loginIsSuccess && loginData) {
      toast.success(loginData.message || "Login successful! Redirecting...");
      navigate("/"); // ✅ Redirects after login
    }
    if (loginError) {
      toast.error(loginError.data.message || "Error logging in. Try again.");
    }
  }, [registerIsSuccess, registerData, registerError, loginIsSuccess, loginData, loginError, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signup">Signup</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>

        {/* ✅ Signup Form */}
        <TabsContent value="signup">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Signup</CardTitle>
              <CardDescription>
                Welcome to Lerners! Sign up today to unlock exciting features.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={signupInput.name}
                  onChange={(e) => changeInputHandler(e, "signup")}
                  placeholder="Eg. Shashank"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={signupInput.email}
                  onChange={(e) => changeInputHandler(e, "signup")}
                  placeholder="example@gmail.com"
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  value={signupInput.password}
                  onChange={(e) => changeInputHandler(e, "signup")}
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                disabled={registerIsLoading}
                onClick={() => handleRegistration("signup")}
                className="w-full"
              >
                {registerIsLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait...
                  </>
                ) : (
                  "Signup"
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* ✅ Login Form */}
        <TabsContent value="login">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Welcome back to Lerners! Log in to continue.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={loginInput.email}
                  onChange={(e) => changeInputHandler(e, "login")}
                  placeholder="example@gmail.com"
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  value={loginInput.password}
                  onChange={(e) => changeInputHandler(e, "login")}
                  placeholder="********"
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                disabled={loginIsLoading}
                onClick={() => handleRegistration("login")}
                className="w-full"
              >
                {loginIsLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait...
                  </>
                ) : (
                  "Login"
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;
