import styles from "./Register.module.css"
import { useEffect, useState } from "react"
import { useAuthentication } from "../../hooks/useAuthentication"

const Register = () => {
    const [displayName, setDisplayName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassord, setConfirmPassword] = useState("")
    const [error, setError] = useState("")
    const { createUser, error: authError,loading } = useAuthentication()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")

        const user = {
            displayName,
            email,
            password,
        }

        if(password !== confirmPassord){
            setError("As senhas precisam ser iguais!")
            return
        }

        const res = await createUser(user)
        console.log(res)
    }

    useEffect(() => {
        if (authError){
            setError(authError)
        }
    }, [authError])

    return (
        <div className={styles.register}>
            <h1>Cadastre-se para postar</h1>
            <p>Crie seus usuário e compartilhe suas histórias</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome:</span>
                    <input 
                        type="text"
                        name="displayName"
                        required
                        placeholder="Nome do Usuário"
                        onChange={(e) => setDisplayName(e.target.value)}
                        value={displayName} 
                    />
                </label>
                <label>
                    <span>Email:</span>
                    <input 
                        type="email"
                        name="email"
                        required
                        placeholder="E-mail do Usuário"
                        onChange={(e) => setEmail(e.target.value)} 
                        value={email}
                    />
                </label>
                <label>
                    <span>Senha:</span>
                    <input 
                        type="password"
                        name="password"
                        required
                        placeholder="Insira a Senha"
                        onChange={(e) => setPassword(e.target.value)} 
                        value={password}
                    />
                </label>
                <label>
                    <span>Confirmação de Senha:</span>
                    <input 
                        type="password"
                        name="confirmPassword"
                        required
                        placeholder="Confirme a Senha"
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        value={confirmPassord}
                    />
                </label>
                {!loading && <button className="btn">Entrar</button>}
                {loading && (
                    <button className="btn" disabled>
                        Aguarde...
                    </button>
                )}
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    )
}

export default Register