import { Calendar, Download, Eye } from "lucide-react";
import type { PublicationPaper } from "@/types/publication-paper";

const PaperCard = ({ paper }: { paper: PublicationPaper }) => {
  return (
    <div className="group flex flex-col h-full bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      {/* Top Accent Bar */}
      <div
        className={`h-1.5 w-full
          ${paper.color === "green" ? "bg-emerald-500" : paper.color === "orange" ? "bg-orange-500" : paper.color === "blue" ? "bg-blue-500" : "bg-purple-500"}`}
      ></div>

      <div className="p-5 flex flex-col flex-grow">
        {/* Header */}
        <div className="flex justify-between items-start mb-3">
          {/* <Badge type={paper.type} color={paper.color} /> */}
          <img
            src={"/icons/publish-paper.svg"}
            alt={paper.type}
            className="h-8 w-8 object-contain"
          />
        </div>

        {/* Content */}
        <h3 className="text-lg font-bold text-slate-800 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
          {paper.title}
        </h3>

        <div className="text-xs text-slate-500 mb-3 flex items-center">
          <span className="font-semibold text-slate-600">Authors:</span>
          <span className="ml-1">{paper.authors.join(", ")}</span>
        </div>

        <div className="text-xs text-slate-400 mb-4 flex items-center">
          <Calendar className="w-3 h-3 mr-1" />
          Published date: {paper.date}
        </div>

        <p className="text-sm text-slate-600 mb-6 line-clamp-3 flex-grow">
          {paper.abstract}
        </p>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-100">
          <button className="flex items-center justify-center flex-1 px-3 py-2 text-xs font-medium text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200">
            <Download className="w-3.5 h-3.5 mr-1.5" />
            Download PDF
          </button>
          <button className="flex items-center justify-center flex-1 px-3 py-2 text-xs font-medium text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200">
            <Eye className="w-3.5 h-3.5 mr-1.5" />
            View Online
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaperCard;
