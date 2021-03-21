import React from 'react';
import './style.css';
import RowsImg from '../../img/rows.png';
import RythmImg from '../../img/rythm.png';
import DragDrop1 from '../../img/drag-drop-1.png';
import DragDrop2 from '../../img/drag-drop-2.png';
import Hand from '../../img/hand.png';

const DragAndDrop = () => {
    return (
        <div className="dran-and-drop-container">
            <img className="dran-and-drop-img1" src={RowsImg} alt=""/>
            <img className="dran-and-drop-img2" src={RythmImg} alt=""/>

            <div className="drag-drop">
                <div className="drag-imgs-top">
                    <div className="drop-left">
                        <div className="drag-top-text">
                            <p>In Progres <span>(3)</span><i class="fas fa-chevron-right"></i></p>
                        </div>
                        <img className="drag-img-1" src={DragDrop1} alt=""/>
                        <img className="drag-img-2" src={DragDrop2} alt=""/>
                        <div className="progres">
                            <div className="pointer-cont"></div>
                            <div className="pointer2-cont"></div>
                            <img className="hand" src={Hand} alt=""/>
                        </div>
                    </div>

                    <div className="drop-right">
                        <div className="drag-top-text">
                            <p>Completed <span>(2)</span></p>
                        </div>
                        <img className="drag-img-1" src={DragDrop1} alt=""/>

                        <div className="drop-here-box">
                            Drop Here
                        </div>
                    </div>
                </div>

                <div className="drag-content">
                    <h2>Drag & Drop</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="arrows">
                        <div className="arrow">
                            <i class="fas fa-caret-left"></i>
                        </div>
                        <div className="arrow">
                            <i class="fas fa-caret-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DragAndDrop
