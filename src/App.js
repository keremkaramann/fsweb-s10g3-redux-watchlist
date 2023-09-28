import { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";
import { useDispatch, useSelector } from "react-redux";
import { addToList } from "./actions/actions";

function App() {
  const dispatch = useDispatch();
  const [sira, setSira] = useState(0);
  const movie = useSelector((store) => store.allMovie);
  const favMovies = useSelector((store) => store.favs);

  const addList = (id) => {
    if (!favMovies.find((favMov) => favMov.id === movie[sira].id)) {
      dispatch(addToList(id));
    } else {
      alert("Movie already added");
    }
  };

  function sonrakiFilm() {
    setSira(sira + 1);
  }
  function previous() {
    setSira(sira - 1);
  }
  function backToZero() {
    setSira(sira * 0);
  }

  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink
          to="/"
          exact
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Filmler
        </NavLink>
        <NavLink
          to="/listem"
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Listem
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Movie sira={sira} />

          <div className="flex gap-3 justify-end py-3">
            {sira >= 1 && (
              <>
                <button
                  onClick={backToZero}
                  className="select-none px-4 py-2 border bg-cyan-500 border-cyan-700 text-black  hover:text-black"
                >
                  Başa Dön
                </button>
                <button
                  onClick={previous}
                  className="select-none px-4 py-2 border  border-red-700 text-red-700 hover:border-red-700 hover:text-black"
                >
                  Önceki
                </button>
              </>
            )}
            {sira < 19 && (
              <button
                onClick={sonrakiFilm}
                className="select-none px-4 py-2 border border-emerald-500 text-emerald-500 hover:border-emerald-500 hover:text-black"
              >
                Sıradaki
              </button>
            )}
            <button
              className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white"
              onClick={() => addList(movie[sira])}
            >
              Listeme ekle
            </button>
          </div>
        </Route>

        <Route path="/listem">
          <div>
            {favMovies?.map((movie) => (
              <FavMovie key={movie.id} title={movie.title} id={movie.id} />
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
