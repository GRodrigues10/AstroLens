import styled from "styled-components";
import spaceApp from '../../assets/spaceApp.png';

export const StylesAppNasa = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${spaceApp});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: white;
    font-weight: bold;
    margin-bottom: 30px;
  }

  .content {
    background-color: #17181a9f;
    width: 80%;
    max-width: 850px;
    height: 500px;
    padding: 20px;
    border-radius: 10px;
    color: #E5E5E5;
    position: relative;
    display: flex;
    flex-direction: column;
    border: 1px solid  #111b2bff;
  }

  /* Botão hamburguer no topo direito da content */
  .hamburger {
    font-size: 2rem;
    background: none;
    border: none;
    cursor: pointer;
    color: white;
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 10;
    background: transparent !important;
  }

  /* Menu dentro da content, próximo ao botão - mobile */
  .menu-hamburger.mobile-menu {
    position: absolute;
    top: 60px;
    right: 20px;
    background: rgba(23, 24, 26, 0.95);
    color: white;
    width: 220px;
    border-radius: 8px;
    padding: 1rem;
    z-index: 10;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
  }

  .aba-item {
    padding: 12px 16px;
    cursor: pointer;
    border-radius: 6px;
    margin-bottom: 8px;
    user-select: none;
    transition: background-color 0.3s ease;
  }

  .aba-item:hover {
    background-color: #2a3a66;
  }

  .aba-item.active {
    background-color: #3B6CB7;
    font-weight: bold;
  }

  /* Menu fixo desktop - escondido no mobile */
  .menu-desktop {
    display: none;
    flex-direction: row;
    gap: 20px;
    margin-top: 10px;
  }

  /* Cada item do menu no desktop fica em linha */
  .menu-desktop .aba-item {
    background: transparent;
    cursor: pointer;
    padding: 8px 12px;
    border-radius: 6px;
    font-weight: normal;
  }

  .menu-desktop .aba-item:hover {
    background-color: #2a3a66;
  }

  .menu-desktop .aba-item.active {
    background-color: #3B6CB7;
    font-weight: bold;
  }

  .content h2 {
    font-size: 1.3rem;
    margin-top: 20px; /* Espaço pra o menu ficar confortável no topo */
    margin-bottom: 20px;
  }

  .content .input {
    display: flex;
    width: 100%;
   
  }

  .content input {
    background-color: #0c0d10;
    color: white;
    border: 1px solid #444;
    border-radius: 4px;
    padding: 10px;
    outline: none;
   
  }

  .content button {
    background-color: #3B6CB7;
    color: white;
    border: none;
    padding: 6px 12px;
    margin-left: 8px;
    border-radius: 4px;
    cursor: pointer;
    transition: .4s ease;

    &:hover{
    background-color: #2a68c5ff;

    }

    
  }

  .row {
    margin-top: 10px;
  }

  .img {
    position: static;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
  }

  img {
    width: 200px;
    background: transparent !important;
  }

  .tab-content2{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
   
  }

  .tab-content2 h2{
    align-self: flex-start;
    
  }

  .tab-content2 .gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;       /* espaçamento entre as imagens */
  justify-content: center; /* centraliza as imagens na linha */
  padding: 10px 0;
}

.tab-content2 .gallery img {
  width: 80%;
  max-width: 250px;    /* largura fixa pra manter padrão */
  height: 160px;   /* altura fixa pra manter padrão */
  object-fit: cover; /* garante que a imagem preencha o espaço sem distorcer */
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0,0,0,0.3);
  cursor: pointer; /* fica interativo pra usuário */
  transition: transform 0.3s ease;
}

.img3{
  display: none;
}

.img4{
  display: none;
}

.img5{
  display: none;
}

.img6{
  display: none;
}

.img7{
  display: none;
}

.img8{
  display: none;
}

.img9{
  display: none;
}



.tab-content2 .gallery img:hover {
  transform: scale(1.05); /* efeito hover suave */
}

.tab-content2  .button-gallery {
    font-size: 1.2rem;
    position: relative;
    top: 10px;
    padding: 8px;
    width: 80%;
    max-width: 200px;
}

  span {
    font-size: 1.1rem;
  }

  .tab-content3 h2{
    font-size: 1.3rem;
    width: 220px;
  }

    .tab-content3 h3{
    font-size: 1.1rem;
    width: 200px;
    text-align: center;
  }

  .apod-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .apod-content img{
    margin-top: 10px;
    border: 2px solid #7FFFD4;
    border-radius: 5px;

  }

  

  .apod-content button{
    margin-top: 10px;
  }

  .apod-content p{
    margin-top: 10px;
    font-size: 0.78rem;
  }

  .tab-content4{
    display: flex;
    flex-direction: column;
   
    
    gap: 20px;
    font-size: 1.1rem;
  
  }


  .tab-content4 > div {
    cursor: pointer;
    transition: .4s ease ;
    &:hover{
      transform: scale(1.025);
    }
  }
 

  .tab-content4 .cme{
    display: flex;
    padding: 10px;
    gap: 10px;
    background-color: #617aacbd;
    border-radius: 5px;
    border: 2px solid black;
    justify-content: space-between;
    align-items: center;
    width: 100%;

  }


  .tab-content4 .velocidade{
    display: flex;
    padding: 10px;
    gap: 10px;
     background-color: #617aacbd;
    border-radius: 5px;
    border: 2px solid black;
    width: 100%;
    justify-content: space-between;
    align-items: center;

  }


  .tab-content4 .flare-solar{
    display: flex;
    padding: 10px;
    gap: 10px;
     background-color: #617aacbd;
    border-radius: 5px;
    border: 2px solid black;
    width: 100%;
    justify-content: space-between;
    align-items: center;

  }


  .tab-content4 .tempestade{
    display: flex;
    padding: 10px;
    gap: 10px;
    background-color: #617aacbd;
    border-radius: 5px;
    border: 2px solid black;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .exit{
    display: none;
  }

  

  @media screen and (min-width:530px) {
        
.tab-content2 .gallery{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

}

.tab-content2 .gallery img {
  width: 80%;
  max-width: 180px;    /* largura fixa pra manter padrão */
  height: 150px;   /* altura fixa pra manter padrão */
  object-fit: cover; /* garante que a imagem preencha o espaço sem distorcer */
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0,0,0,0.3);
  cursor: pointer; /* fica interativo pra usuário */
  transition: transform 0.3s ease;
}
        
.img3{
  display: flex;
}

.img4{
  display: flex;
}

.img5{
  display: none;
}

.img6{
  display: none;
}

.img7{
  display: none;
}

.img8{
  display: none;
}

.img9{
  display: none;
}


.tab-content3 h2{
    font-size: 1.3rem;
    width: 300px;
  }

  .tab-content3 h3{
    font-size: 1.2rem;
    width: 300px;
  }


  .apod-content p{
    margin-top: 10px;
    font-size: 0.9rem;
  }

   .tab-content4 h2{
    font-size: 1.5rem;
  }

  .tab-content4 p{
    font-size: 1.25rem;
  }

  }

  /* Media query para desktop */
  @media screen and (min-width: 768px) {
    .hamburger {
      display: none;
    }
    .menu-hamburger.mobile-menu {
      display: none;
    }
    .menu-desktop {
      display: flex;
      justify-content: space-around;
      border-bottom: 1px solid white;
    }
    .tab-content {
      display: flex;
    }

    .content input {
      width: 50%;
      font-size: 1.3rem;
    }
    .content button {
      font-size: 1.3rem;
    }

    .data-text {
      /* deixa input+botão+dados ocupando o fluxo normal */
      display: flex;
      flex-direction: column;
      gap: 15px;
      max-width: 600px;
    }

    .img {
      position: absolute; /* fixa a imagem */
      top: 70%; /* centraliza verticalmente */
      right: 100px; /* distância da borda direita da .content */
      transform: translateY(-50%);
      margin-top: 0;
      width: 100px;
      z-index: 5;
    }

    


    img{
        width: 250px;
    }


    .tab-content2 .gallery img {
  width: 80%;
  max-width: 150px;    /* largura fixa pra manter padrão */
  height: 120px;   /* altura fixa pra manter padrão */
  object-fit: cover; /* garante que a imagem preencha o espaço sem distorcer */
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0,0,0,0.3);
  cursor: pointer; /* fica interativo pra usuário */
  transition: transform 0.3s ease;
}

    .img6{
  display:flex;
}

.img7{
  display: flex;
}

.img8{
  display: none;
}

.img9{
  display: none;
}


    .data-text h2 {
      font-size: 1.5rem;
    }

    .content .planetary-data .row .label {
      font-size: 1.3rem;
    }

    
  .tab-content3 h2{
    width: 320px;
      font-size: 1.4rem;
  }

  .tab-content3 h3{
    font-size: 1.3rem;
  }

  .tab-content3 p{
    font-size: 1rem;
  }

      .tab-content4 h2{
    font-size: 1.6rem;
    text-align: start;
  }

  .tab-content4 p{
    font-size: 1.3rem;
  }


    

    .exit{
        display: flex;
        margin-top: 50px;
        width: 100px;
        align-items: center;
        justify-content: center;
        padding: 10px !important;
    }
  }

  @media screen  and (min-width:992px){

    h1{
        font-size:2.6rem;
        position:relative;
        right: 195px;
    }
      .img {
      position: absolute; /* fixa a imagem */
      top: 60%; /* centraliza verticalmente */
      right: 100px; /* distância da borda direita da .content */
      transform: translateY(-50%);
      margin-top: 0;
      width: 250px;
      z-index: 5;
    }

    .tab-content2 .gallery img {
  width: 80%;
  max-width: 160px;    /* largura fixa pra manter padrão */
  height: 130px;   /* altura fixa pra manter padrão */
  object-fit: cover; /* garante que a imagem preencha o espaço sem distorcer */
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0,0,0,0.3);
  cursor: pointer; /* fica interativo pra usuário */
  transition: transform 0.3s ease;
}

.img8{
  display: flex;
}

.img9{
  display: flex;
}
.tab-content3 button{
  font-size: 1rem;
}

  .tab-content4 > div{
    padding: 15px !important ;
  }
    


    img{
        width: 300px;
    }

  }

    @media screen  and (min-width:1200px){

        .content{
            height: 550px;
        }
        h1{
            font-size: 3.1rem;
            position:relative;
            right: 168px;
        }

        .menu-desktop{
            font-size: 1.2rem !important;
        }

        .content h2{
            font-size: 1.8rem;
        }

        .data-text{
            margin-top: 30px;
        }
        .label{
            font-size: 1.35rem !important;
        }
        .value{
            font-size: 1.25rem;
        }
      .img {
      position: absolute; /* fixa a imagem */
      top: 60%; /* centraliza verticalmente */
      right: 100px; /* distância da borda direita da .content */
      transform: translateY(-50%);
      margin-top: 0;
        
      z-index: 5;
    }

    
    .tab-content2 .gallery img {
  width: 80%;
  max-width: 180px;    /* largura fixa pra manter padrão */
  height: 150px;   /* altura fixa pra manter padrão */
  object-fit: cover; /* garante que a imagem preencha o espaço sem distorcer */
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0,0,0,0.3);
  cursor: pointer; /* fica interativo pra usuário */
  transition: transform 0.3s ease;
}

.img8{
  display: flex;
}

.img9{
  display: flex;
}

.tab-content3 h2{
    font-size: 1.45rem;
    width: 400px;
  }

  .tab-content3 h3{
    font-size: 1.35rem;
    width: 300px !;
    text-align: center;
  }

.tab-content3 button{
  margin-top: 20px;
  font-size: 1.2rem;
}



  .apod-content p{
    margin-top: 10px;
    font-size: 1rem;
  }

    .exit{
        margin-top: 35px;
    }
  }
`
