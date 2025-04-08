"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectItem } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const mockProperties = [
  {
    id: 1,
    title: "Apartamento no Centro",
    type: "compra",
    image: "https://via.placeholder.com/400x200",
    price: "R$ 350.000"
  },
  {
    id: 2,
    title: "Casa para Alugar",
    type: "aluguel",
    image: "https://via.placeholder.com/400x200",
    price: "R$ 2.500/mês"
  }
];

export default function Imobiliaria() {
  const [filtro, setFiltro] = useState("todos");
  const [imoveis, setImoveis] = useState(mockProperties);
  const [novo, setNovo] = useState({ title: "", type: "compra", image: "", price: "" });

  const filtrados = imoveis.filter(imovel =>
    filtro === "todos" ? true : imovel.type === filtro
  );

  const adicionarImovel = () => {
    const novoImovel = { ...novo, id: Date.now() };
    setImoveis([novoImovel, ...imoveis]);
    setNovo({ title: "", type: "compra", image: "", price: "" });
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Portal Imobiliário</h1>

      <Tabs defaultValue="todos" className="mb-6">
        <TabsList>
          <TabsTrigger value="todos" onClick={() => setFiltro("todos")}>Todos</TabsTrigger>
          <TabsTrigger value="compra" onClick={() => setFiltro("compra")}>Comprar</TabsTrigger>
          <TabsTrigger value="aluguel" onClick={() => setFiltro("aluguel")}>Alugar</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtrados.map(imovel => (
          <Card key={imovel.id}>
            <img src={imovel.image} alt={imovel.title} className="rounded-t-2xl h-48 w-full object-cover" />
            <CardContent>
              <h2 className="text-xl font-semibold mt-2">{imovel.title}</h2>
              <p className="text-sm text-gray-600">{imovel.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 border-t pt-6">
        <h2 className="text-2xl font-bold mb-4">Painel de Administração</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <Input
            placeholder="Título do imóvel"
            value={novo.title}
            onChange={e => setNovo({ ...novo, title: e.target.value })}
          />
          <Input
            placeholder="URL da imagem"
            value={novo.image}
            onChange={e => setNovo({ ...novo, image: e.target.value })}
          />
          <Input
            placeholder="Preço"
            value={novo.price}
            onChange={e => setNovo({ ...novo, price: e.target.value })}
          />
          <Select
            value={novo.type}
            onValueChange={value => setNovo({ ...novo, type: value })}
          >
            <SelectItem value="compra">Compra</SelectItem>
            <SelectItem value="aluguel">Aluguel</SelectItem>
          </Select>
        </div>
        <Button onClick={adicionarImovel}>Adicionar Imóvel</Button>
      </div>
    </div>
  );
}
