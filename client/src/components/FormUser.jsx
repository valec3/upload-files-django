import { useState } from "react"
import { createPersona } from "../services/api"


const FormUser = () => {
    const [data, setData] = useState({
        usuario: '',
        avatar: ''
    })
    const [avatar, setAvatar] = useState()
    const handlerSubmit = (e) => {
        e.preventDefault()
        createPersona(data)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
    const handlerAvatar = (e) => {
        setData({
            ...data,
            avatar: e.target.files[0]
        })
        setAvatar(URL.createObjectURL(e.target.files[0]))
        console.log(data)
    }
    const handlerName = (e) => {
        setData({
            ...data,
            usuario: e.target.value
        })
        console.log(data)
    }
    return (
        <section className="rounded-xl border-[4px] p-8">
            <h1 className="text-white py-2 text-4xl font-bold mb-6">Formulario de Usuario</h1>
            <div className="flex">
                <form action="" method="POST" encType="multipart/form-data"  onSubmit={handlerSubmit}>
                    <div className="flex flex-col gap-3 text-white font-semibold">
                        <div className="flex gap-4 items-center">
                            <label htmlFor=""  >Nombre:</label>
                            <input className="text-black p-1 pl-2" type="text" name="usuario" id="" onChange={handlerName}/>
                        </div>
                        <div>
                            <label htmlFor="">Avatar foto</label>
                            {
                                avatar &&
                                <img className="max-w-full h-[400px] w-[600px] object-contain" src={avatar} alt="avatar" />
                            }
                            <input type="file" name="avatar" id="" onChange={handlerAvatar}/>
                        </div>
                        <div>
                            <button type="submit" className="bg-red-600 px-4 py-2 rounded-md hover:bg-red-800 active:scale-95">Enviar</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default FormUser