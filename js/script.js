// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall updated by Anna S.
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

function classTriangle() {
  // input
  const sideA = parseInt(document.getElementById("side-a").value)
  const sideB = parseInt(document.getElementById("side-b").value)
  const sideC = parseInt(document.getElementById("side-c").value)

  // process for angles
  let angleA =
    Math.acos((sideB ** 2 + sideC ** 2 - sideA ** 2) / (2 * sideB * sideC)) *
    (180 / Math.PI)
  let angleB =
    Math.acos((sideC ** 2 + sideA ** 2 - sideB ** 2) / (2 * sideC * sideA)) *
    (180 / Math.PI)
  let angleC =
    Math.acos((sideA ** 2 + sideB ** 2 - sideC ** 2) / (2 * sideA * sideB)) *
    (180 / Math.PI)

  // process for angle sum
  let sumOfAngles =
    Number(angleA.toFixed(2)) +
    Number(angleB.toFixed(2)) +
    Number(angleC.toFixed(2))

  if (sumOfAngles !== 180) {
    // output
    document.getElementById("result").innerHTML =
      "<p>Oops, not a triangle :(</p>"
  }
  // process
  else if (sideA === sideB && sideA === sideC && sideB === sideC) {
    // output
    document.getElementById("result").innerHTML =
      "<p>This is an equilateral triangle.</p>"
  }
  // process
  else if (sideA == sideB || sideA == sideC || sideB == sideC) {
    //output
    document.getElementById("result").innerHTML =
      "<p>This is an isosceles triangle.</p>"
  }
  // process
  else {
    // output
    document.getElementById("result").innerHTML =
      "<p>This is a scalene triangle.</p>"
  }
}
