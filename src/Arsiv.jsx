import { NavLink } from 'react-router-dom'
import './App.css'

function Arsiv() {

    return (
        <>
            <div className='main'>
                <h1>Xiao arşiv</h1>
                <br />
                <p>Bir karakterin onlarca fotoğrafını indiricek kadar sapıksın demek </p>
                <br />
                <button><NavLink target='_blank' to={"https://drive.google.com/drive/folders/1SDADoffQ0sH6dzvpmB4oEaVqPAIah2Co?usp=sharing"} >
                    İndir
                </NavLink></button>
                <br />
            </div>

        </>
    )
}

export default Arsiv
