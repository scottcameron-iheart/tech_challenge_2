// importing react and using Hooks, like useState
import React, { useState } from 'react';

const songs = require('../data/songs.json');

// Creating the songlist for users
const SongsList= () => {

    // Lets us show and hide the menu for the songslist to display 
    const [showText,hideText]=useState(false);
    const [add,minus] =useState(true);

    //importing songs form json format
    const dataImport = songs[0];

    function renderHeaderCells() {
       let headerCells = [];

       Object.keys(dataImport).map((x, i) => {
        let items = Object.values(dataImport)[i];
        headerCells.push(
          <th colSpan={Object.keys(items).length} key={i.name}>
            {x}
          </th>
        );
            return headerCells;        
         });
        return headerCells;
    }

    function renderSubHeaders(){
        let subHeaders = [];
        let subs = Object.values(dataImport);
        
        subs.map((x,i)=> {
            if(subs[i] !== undefined) {
                Object.keys(subs[i]).map(y => {
                    subHeaders.push(<td>{y}</td>);
                    return subHeaders;
                });
            }
            return subHeaders;
        });
        return subHeaders;
    }

    function renderResults() {
        let results = [];
        let res = Object.values(dataImport)

        res.map((x,i)=> {
            if(res[i] !== undefined) {
                Object.keys(res[i]).map(y => {
                    results.push(<td>{y}</td>);
                    return results;
                });
            }
            return results;
        });
        return results;
    }

    console.log(songs)
    return (
        <React.Fragment>
            <p> Songs List</p>
            <button className="plus" onClick={() =>
                {hideText(!showText);minus(!add)}}>{add?'Show Songs':'Hide Songs'}
            </button>{showText &&
           
           <div>
                <p> lipsum dloream isp pur</p>

                <table>
                <thead>
                    <tr> {renderHeaderCells()}</tr>
                </thead>
                <tbody>
                    <tr> {renderSubHeaders()}</tr>
                    <tr>{renderResults()}</tr>
                </tbody>
            </table>
            </div>

            }


           
        </React.Fragment>
    );
};

export default SongsList;