import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Game } from '../../App'

// Tipar o initialState
type CarrinhoState = {
  itens: Game[]
}

// Objeto pro estado inicial
const initialState: CarrinhoState = {
  itens: []
}
// fim de tipar initialState

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState, // esse é o state
  // Parte onde vai construir a mudança do estado
  reducers: {
    adicionar: (state, action: PayloadAction<Game>) => {
      const jogo = action.payload // armazenamento do payload

      // Procure no estado se tem um game id que seja igual a jogo.id
      // Se tiver falar que o item já foi adicionado
      // Caso contrario faça um push(jogo) -- adicione na const jogo
      if (state.itens.find((game) => game.id === jogo.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(jogo)
      }
    }
  }
})

// Desestruturou para fazer a importação
export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
