import { JourneyNode } from "@/components/brag-page/JourneyNode";
import type { JourneyItemData } from "@/components/brag-page/JourneyCardBody";

export function JourneyMap({ nodes }: { nodes: JourneyItemData[] }) {
  return (
    <ol className="relative">
      {nodes.map((node, index) => (
        <JourneyNode
          key={node.id}
          item={node}
          index={index}
          total={nodes.length}
        />
      ))}
    </ol>
  );
}
