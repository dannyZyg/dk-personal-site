---
layout: ../../layouts/project.astro
title: Machine Learning Weather Visualisations
tags: [creative-tech]
image: ml-weather.gif
---

https://vimeo.com/290256701

This project attempts to create a living program that visualises live weather
conditions from around the world. The piece consists of three parts, a
Processing program that acts as a feature extractor using the OpenWeatherMap
API, a Wekinator project which trains and runs the machine learning model, and
a flexible Processing sketch with many parameters which acts as an abstract
visualisation of the incoming data. The visualisation sketch is built around an
object-oriented particle-system approach to graphics, where each ‘particle’ is
a semi-random collection of vertices connected to make a curly [[bezier]] curve.
Other parameters available to the machine learning process include rotation,
colour settings, movement behaviours and shape characteristics. The aim is for
the program to create very abstract representations of the incoming weather
data. By training a machine learning model on a series of example cities, a new
user can explore additional cities to see how the program visualises them.

I wanted to create a machine learning program that felt generative, despite all
outputs being based on training data. In a way, it is more inspired by the
generative approaches to machine learning through deep learning than by any
‘mapped’ machine learning project.

Technology: Processing, OpenWeatherMap API, Wekinator & Machine Learning
