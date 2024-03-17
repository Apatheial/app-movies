import styles from "./Form.module.css"
import { categories } from "../Category";
import { useState } from "react";

function Form() {

    interface videoInterface {
        url: string,
        category: string
    }

    const [ url, setUrl ] = useState<string>('')
    const [ category, setCategory ] = useState<string>('')
    const [ videos, setVideos ] = useState<videoInterface[]>([])
    const [ errors, setErrors ] = useState<string>('')
 
    function valideUrl(url:string): false | string {
        const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/

        if(!regex.test(url) || url.length < 43) {
            return false
        }
        return url.substring(32, 43)
    }

    function onSave( e:any ):void {
        e.preventDefault()
        // Validar category
        if(!category || category === '-') {
            setErrors('ERRO: Escolha uma categoria!')
            return
        } else {
            setErrors('')
        }
        // Validar url
        const urlVideo = valideUrl(url)
        if(urlVideo && category) {
            // salvar os dados
            const newVideo: videoInterface = { url, category }
            setVideos([...videos, newVideo])
            localStorage.setItem('videos', JSON.stringify([...videos, newVideo]))
            // Limpar Formulario
            setUrl('')
            setCategory('')
        } else {
            setErrors('ERRO: URL inválida!')
        }
    }
    
    return (
        <section className={ styles.container }>
            <h2>Cadastro de vídeo</h2>
            <form onSubmit={ onSave } >
                <div>
                    <label>URL do vídeo</label>
                    <input 
                        type="text"
                        value={ url }
                        placeholder="Digite a URL do vídeo"
                        required={ true }
                        onChange={ (evt) => setUrl(evt.target.value) }
                        minLength={43}
                        maxLength={43}
                    />
                </div>
                <div>
                    <label>Catégoria</label>
                    <select
                        value={ category }
                        onChange={ (evt) => setCategory(evt.target.value) }
                    >
                        <option value="-">Selecione uma categoria</option>
                        { categories.map( item => <option value={item} key={item}>{ item }</option>) }
                    </select>
                </div>
                <div>
                    <button>Cadastrar</button>
                </div>
                <div>
                    {errors}
                </div>
            </form>
        </section>
    );
}

export default Form;
