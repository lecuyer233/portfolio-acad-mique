import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <header className="text-center mb-12">
        <motion.h1 
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Mon Portfolio Académique
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Présentation de mon parcours, compétences et projets académiques.
        </motion.p>
      </header>

      <section className="mb-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">À Propos de Moi</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Étudiant passionné par [ton domaine], avec une expertise en [tes compétences principales].
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-center mb-6">Mes Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((proj) => (
            <Card key={proj} className="bg-gray-800 p-4 rounded-lg">
              <CardContent>
                <h3 className="text-lg font-semibold">Projet {proj}</h3>
                <p className="text-gray-400 text-sm">
                  Description du projet académique.
                </p>
                <Button className="mt-4">Voir plus</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <div className="flex justify-center gap-6">
          <a href="#" className="text-xl text-gray-400 hover:text-white">
            <FaGithub />
          </a>
          <a href="#" className="text-xl text-gray-400 hover:text-white">
            <FaLinkedin />
          </a>
          <a href="#" className="text-xl text-gray-400 hover:text-white">
            <FaEnvelope />
          </a>
        </div>
      </section>
    </div>
  );
}