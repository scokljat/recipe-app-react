import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./action";

function Posts() {
  const meal = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      {meal.meal.map((item) => {
        return (
          <div className="container">
            <div>
              <div className="titleWrap">
                <h1 className="title">{item.strMeal}</h1>
              </div>
              <div className="subtitle">
                <h2>{item.strArea}</h2>
                <h2>{item.strCategory}</h2>
              </div>
              <div className="ekran">
                <img className="image" src={item.strMealThumb} />
                <div className="wrap">
                  <div className="ingredients">
                    <h3>Ingredients :</h3>
                    <li>{item.strIngredient1}</li>
                    <li>{item.strIngredient2}</li>
                    <li>{item.strIngredient3}</li>
                    <li>{item.strIngredient4}</li>
                    <li>{item.strIngredient5}</li>
                    <li>{item.strIngredient6}</li>
                    <li>{item.strIngredient7}</li>
                    <li>{item.strIngredient8}</li>
                  </div>
                  <div className="measures">
                    <h3>Measures :</h3>
                    <li>{item.strMeasure1}</li>
                    <li>{item.strMeasure2}</li>
                    <li>{item.strMeasure3}</li>
                    <li>{item.strMeasure4}</li>
                    <li>{item.strMeasure5}</li>
                    <li>{item.strMeasure6}</li>
                    <li>{item.strMeasure7}</li>
                    <li>{item.strMeasure8}</li>
                  </div>
                </div>
              </div>
              <p className="instructions">{item.strInstructions}</p>
            </div>
            <a className="tags" href="#">
              {item.strTags}
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
