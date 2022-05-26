import { useEffect } from "react";
import { useForm } from "@inertiajs/inertia-react";
import { MailIcon, LockClosedIcon } from "@heroicons/react/outline";
import Guest from "@/Layouts/Guest";
import ValidationErrors from "@/Components/ValidationErrors";
import InputIconWrapper from "@/Components/InputIconWrapper";
import Label from "@/Components/Label";
import Input from "@/Components/Input";
import Button from "@/Components/Button";

export default ({ token, email }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("password.update"));
    };

    return (
        <Guest title="Reset Password">
            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <div className="grid gap-6">
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
                                placeholder="Digite seu e-mail"
                                value={data.email}
                                className="block w-full mt-1"
                                autoComplete="username"
                                handleChange={onHandleChange}
                                withIcon
                            />
                        </InputIconWrapper>
                    </div>

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
                                placeholder="Digite sua nova senha"
                                value={data.password}
                                className="block w-full mt-1"
                                autoComplete="new-password"
                                isFocused={true}
                                handleChange={onHandleChange}
                                withIcon
                            />
                        </InputIconWrapper>
                    </div>

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
                                placeholder="Digite sua senha novamente"
                                value={data.password_confirmation}
                                className="block w-full mt-1"
                                autoComplete="new-password"
                                handleChange={onHandleChange}
                                withIcon
                            />
                        </InputIconWrapper>
                    </div>

                    <Button
                        className="justify-center w-full"
                        processing={processing}
                    >
                        Cadastrar nova senha
                    </Button>
                </div>
            </form>
        </Guest>
    );
};
