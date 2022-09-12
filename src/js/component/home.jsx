import React,{useState, useEffect} from "react";
import './home.css'


//create your first component
const Home = () => {

  const [segundo, setSegundo] = useState(0)
  const [minuto, setMinuto] = useState(0)
  const [hora, setHora] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      if(segundo < 60){
        setSegundo(segundo + 1)
      }
      if(segundo >= 60) {
        setMinuto(minuto + 1)
        setSegundo(0)
      }
      if(minuto >= 60) {
        setHora(hora + 1)
        setMinuto(0)
      }
      if(hora >= 24) {
        setHora(0)
      }
    }, 1000)
  })


	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Counter!</h1>
			<div className="bigContentNumber">
			<div className="contentNumber">
				<div className="sectionTime">
					<p className="number">{hora}</p>
				</div>
				<p className="twoDots">:</p>
				<div className="sectionTime">
					<p className="number">{minuto}</p>
				</div>
				<p className="twoDots">:</p>
				<div className="sectionTime">
					<p className="number">{segundo}</p>
				</div>
			</div>
			</div>
		</div>
	);
};

export default Home;
