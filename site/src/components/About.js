import React from 'react'
import './About.css'
import logo from './images and icons/apmlogo.png'
import info from './images and icons/info.txt'

function About(){
    return(
        <article>
            <h1>What parameters does the device measure?</h1>
            <p><em>The state-of-the-art of atmospheric air is accompanied by a change of its natural
composition, in particular, increased amount of carbon dioxide (CO 2 ). According to
the Mauna Loa Observatory on May 11, 2019, the level of CO 2 in the atmosphere
reached an unprecedented mark in the history of its measurements - 415.26 ppm [1].
Such an increase was caused by fossil burning and deforestation of large forests.
On October 21, 2019, Ukraine was in third place in terms of air pollution on the
map of air pollution around the world, which collects data from 11 thousand sensors
in 90 countries, outriding India and China (US Environmental Protection Agency
Project) [2].
The concentration of air pollutants is above the maximum permissible level
poses a threat to the environment, as well as human health. It should be understood
that the concentration of harmful substances in the air and in the indoor air may be
different.
In all the premises, where people stay temporarily or permanently, carbon
dioxide (CO 2 ) is the main air pollutant. Normally, this gas is contained in the outdoor
air at concentration of 300-400 ppm (0.03-0.04%), however, with each exhalation a
person fills the surrounding air with a new portion of CO 2 (18-25 liters per hour).
Given that the concentration of carbon dioxide in the exhaled air is 100 times higher
than in clean air, a room quickly becomes potentially dangerous to health.
Increasing level of CO 2 can cause symptoms of lack of oxygen, deterioration of
cognitive abilities, directly affect one’s ability to work, lead to its complete loss,
which ultimately affects the educational process in schools and the results of
companies.
One should take into account many products that emit volatile organic
compounds into the air. The concentration of these substances indoors can be even
100 times higher than outside.
Volatile organic compounds or VOCs are chemicals that are released in the form
of gases from solids or liquids, easily evaporate into the air, even at room temperature. Of course, formaldehyde, benzene and phenol are among the most
dangerous according to the classification of the US Environmental Protection Agency
(EPA), US Green Building Council (USGBC) and European Union (EU).
Studies claim that values above 500 ng/l (nanograms per liter) of volatile
organic compounds can pose a health hazard to homeowners. However, data from
thousands of tested houses show that average value is 1200 ng/l - more than twice the
allowable level [3]. Even moderately elevated levels of these chemicals in the air can
cause health problems for people, especially those suffering from allergies and
asthma.
Because of this monitoring of air composition to preserve health and life, which
becomes possible and convenient thanks to the developed system of air quality
monitoring in any place chosen by the user, with the ability to obtain data on the
result directly by the user, becomes especially relevant.
The purpose of the study is to ensure collection of data on indoor air quality.
For this purpose, the author was solving the following tasks:
1. Selection of optimal sensor and board;
2. Development of the program of reading of indications from the sensor and
their transfer to the main server;
3. Development of a program for data analysis on the server and transmission of
the final result to the user.
As a result of this study, a software and hardware complex that allows obtaining
and processing air quality data at any point of geolocation with subsequent
transmission of the result to the end user using a bot in the messenger - Telegram or
on the user’s web page, has been developed.
The object of study - processes of collecting and displaying indoor air quality
data.
The subject of study - algorithms for collecting and displaying indoor air
quality data.
Practical importance. The resulting device can be used to measure indoor air
quality.
The methods of study - collection and display of indoor air quality data using
the developed programs.
To achieve scientific novelty, a thorough analysis of the most well-known
existing monitoring systems described in the paper was performed to implement a
fundamentally new system that has more advantages rather than disadvantages
compared to old counterparts.
Personal contribution: this paper describes my development of a system for
monitoring condition of the indoor air. For this, I have developed 2 programs using
the python programming language, namely a Telegram bot and program for a
measuring device. Also, for easy interaction, I have developed a web page, using
MERN technology, to send settings to the user.</em></p>
            {/* <blockquote>
                <p>The picture</p>
            </blockquote>
            <figure>
                <img src={logo} alt={"wke"}/>
            </figure> */}
        </article>
    )
}

export default About;