import { useEffect } from "react";
import {
    UserIcon,
    MailIcon,
    LockClosedIcon,
    UserAddIcon,
} from "@heroicons/react/outline";
import { Link, useForm } from "@inertiajs/inertia-react";
import Guest from "@/Layouts/Guest";
import ValidationErrors from "@/Components/ValidationErrors";
import InputIconWrapper from "@/Components/InputIconWrapper";
import Label from "@/Components/Label";
import Input from "@/Components/Input";
import Button from "@/Components/Button";

export default () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <Guest title="Register">
            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <div className="grid gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                        <Label forInput="name" value="Nome" />

                        <InputIconWrapper
                            icon={
                                <UserIcon
                                    aria-hidden="true"
                                    className="w-5 h-5"
                                />
                            }
                        >
                            <Input
                                type="text"
                                name="name"
                                placeholder="Informe seu nome"
                                value={data.name}
                                className="block w-full"
                                autoComplete="name"
                                isFocused={true}
                                handleChange={onHandleChange}
                                required
                                withIcon
                            />
                        </InputIconWrapper>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <Label forInput="email" value="E-mail" />

                        <InputIconWrapper
                            icon={
                                <MailIcon
                                    aria-hidden="true"
                                    className="w-5 h-5"
                                />
                            }
                        >
                            <Input
                                type="email"
                                name="email"
                                placeholder="Informe seu e-mail"
                                value={data.email}
                                className="block w-full mt-1"
                                autoComplete="username"
                                handleChange={onHandleChange}
                                required
                                withIcon
                            />
                        </InputIconWrapper>
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                        <Label forInput="password" value="Senha" />

                        <InputIconWrapper
                            icon={
                                <LockClosedIcon
                                    aria-hidden="true"
                                    className="w-5 h-5"
                                />
                            }
                        >
                            <Input
                                type="password"
                                name="password"
                                placeholder="Crie sua senha"
                                value={data.password}
                                className="block w-full mt-1"
                                autoComplete="new-password"
                                handleChange={onHandleChange}
                                required
                                withIcon
                            />
                        </InputIconWrapper>
                    </div>

                    {/* Password confirmation */}
                    <div className="space-y-2">
                        <Label
                            forInput="password_confirmation"
                            value="Confirmação da Senha"
                        />

                        <InputIconWrapper
                            icon={
                                <LockClosedIcon
                                    aria-hidden="true"
                                    className="w-5 h-5"
                                />
                            }
                        >
                            <Input
                                type="password"
                                name="password_confirmation"
                                placeholder="Confirme sua senha"
                                value={data.password_confirmation}
                                className="block w-full mt-1"
                                handleChange={onHandleChange}
                                required
                                withIcon
                            />
                        </InputIconWrapper>
                    </div>

                    {/* Submit */}
                    <Button
                        className="justify-center w-full gap-2"
                        processing={processing}
                    >
                        <UserAddIcon aria-hidden="true" className="w-6 h-6" />
                        <span>Cadastrar</span>
                    </Button>

                    {/* Login link */}
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Já possui uma conta?{" "}
                        <Link
                            href={route("login")}
                            className="text-blue-500 hover:underline"
                        >
                            Fazer login
                        </Link>
                    </p>
                </div>
            </form>
        </Guest>
    );
};
