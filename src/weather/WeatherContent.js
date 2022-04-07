import React from 'react'

function WeatherContent({temp,name,climat,max_temp,visibility,windSpeed,windGust,description}) {
	let data = new Date().toLocaleString("en-Gb",{day:'numeric',month:'short',year:'numeric'});
    return (
        <>
           <div className="container">
	<div className="row">
		<div className="col">
			<div className="weather-card one">
				<div className="top">
					<div className="wrapper">
						<div className="mynav">
							<a href="javascript:;"><span className="lnr lnr-chevron-left"></span></a>
							<a href="javascript:;"><span className="lnr lnr-cog"></span></a>
						</div>
						<h1 className="heading">{climat}</h1>
						<h3 className="location">{name}</h3>
						<h4 className='data'>{data}</h4>
						<p className="temp">
							<span className="temp-value">{temp}</span>
							<span className="deg">0</span>
							<a href="javascript:;"><span className="temp-type">C</span></a>
						</p>
                        <div className='wind'>
                        <p className='speed' >Speed <span className='speed'>{windSpeed}</span>/<span className='gust' >Gust</span> <span className='gust' >{windGust}</span> </p>
                        <p className='description'>{description}</p>

                        </div>
					</div>
				</div>
				<div className="bottom">
					<div className="wrapper">
						<ul className="forecast">
							<a href="javascript:;"><span className="lnr lnr-chevron-up go-up"></span></a>
							<li className="active">
								<span className="date">visibility</span>
								<span className="lnr lnr-sun condition">
									<span className="temp">{max_temp}<span className="deg">0</span><span className="temp-type">C</span></span>
								</span>
							</li>
							<li>
								<span className="date">{visibility}</span>
								<span className="lnr lnr-cloud condition">
									<span className="temp">{temp}<span className="deg">0</span><span className="temp-type">C</span></span>
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		
	</div>
</div>
        </>
    )
}

export default WeatherContent