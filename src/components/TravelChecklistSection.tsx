import React, { useState } from 'react';
import { CheckSquare, Square, FileText, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { CHECKLIST_ITEMS } from '../data/travelData';

export const TravelChecklistSection: React.FC = () => {
  const [completedItems, setCompletedItems] = useState<string[]>(['c1', 'c5']);

  const toggleItem = (id: string) => {
    if (completedItems.includes(id)) {
      setCompletedItems(completedItems.filter((item) => item !== id));
    } else {
      setCompletedItems([...completedItems, id]);
    }
  };

  const total = CHECKLIST_ITEMS.length;
  const doneCount = completedItems.length;
  const percentage = Math.round((doneCount / total) * 100);

  return (
    <section id="checklist" className="py-20 bg-stone-100 text-stone-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 border border-blue-300 text-blue-900 text-xs font-bold uppercase tracking-wider mb-3">
            <FileText className="w-3.5 h-3.5 text-blue-700" />
            <span>Guia Prático do Viajante</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-display text-stone-900 tracking-tight">
            Checklist Oficial Antes de Embarcar para o Exterior
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600">
            A preparação correta evita contratempos na imigração. Use nossa ferramenta interativa
            para acompanhar o status dos seus preparativos.
          </p>
        </div>

        {/* Progress Card */}
        <div className="max-w-4xl mx-auto mb-8 bg-white border border-stone-200 p-5 rounded-2xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-bold text-stone-900 text-sm">
              Seu Progresso de Preparação: {doneCount} de {total} itens concluídos
            </h4>
            <p className="text-xs text-stone-500">
              {percentage === 100
                ? '🎉 Parabéns! Você está pronto para decolar com total tranquilidade!'
                : 'Clique nos itens para marcar o que você já providenciou.'}
            </p>
          </div>

          {/* Progress bar */}
          <div className="w-full sm:w-64">
            <div className="flex justify-between text-xs font-bold mb-1">
              <span className="text-stone-600">Prontidão</span>
              <span className="text-amber-600">{percentage}%</span>
            </div>
            <div className="w-full bg-stone-200 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-amber-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Checklist Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {CHECKLIST_ITEMS.map((item) => {
            const isDone = completedItems.includes(item.id);
            return (
              <div
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 select-none ${
                  isDone
                    ? 'bg-emerald-50/70 border-emerald-300 shadow-sm'
                    : 'bg-white border-stone-200 hover:border-amber-400 hover:shadow-md'
                }`}
              >
                <div className="mt-0.5 text-emerald-600 shrink-0">
                  {isDone ? (
                    <CheckSquare className="w-5 h-5 text-emerald-600" />
                  ) : (
                    <Square className="w-5 h-5 text-stone-400" />
                  )}
                </div>

                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-700 bg-amber-100/60 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        item.importance === 'Essencial'
                          ? 'bg-rose-100 text-rose-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {item.importance}
                    </span>
                  </div>

                  <h3
                    className={`text-sm font-bold transition-colors ${
                      isDone ? 'text-emerald-950 line-through' : 'text-stone-900'
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Agency Assistance Note */}
        <div className="max-w-4xl mx-auto mt-8 bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3 text-xs text-blue-900">
          <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Fique tranquilo: </span>
            Ao fechar sua viagem internacional com a Horizonte, nosso departamento de documentação
            faz a conferência prévia de todos esses itens para você e sua família antes da emissão
            dos bilhetes, garantindo embarque sem riscos.
          </div>
        </div>
      </div>
    </section>
  );
};
