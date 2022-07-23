import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';
export const addIngredient = (name) => {
     return {
          type : actionTypes.ADD_INGREDIENT,
          ingredientName : name
     };
};

export const removeIngredient = (name) => {
     return {
          type : actionTypes.REMOVE_INGREDIENT,
          ingredientName : name
     };
};

export const setIngredient = ( ingredients ) => {
     return {
          type : actionTypes.SET_INGREDIENT,
          ingredients : ingredients
     }
}

export const fetchIngredientFailed = () => {
     return {
          type : actionTypes.FETCH_INGREDIENT_FAILED
     };
;}

export const initIngredients = () => {
     return dispatch => {
          axios.get('https://react-burger-34f8e-default-rtdb.firebaseio.com/ingredients.json')
          .then(response => {
               dispatch(setIngredient(response.data));
          })
          .catch(error => {
               dispatch(fetchIngredientFailed());
          })
     }
}