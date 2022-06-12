import { declarationTransformer, transformer } from "@deepkit/type-compiler";
import { transpileModule } from "typescript";
import { Plugin } from "vite";

import TSCONFIG from "../tsconfig.json";

export function DeepkitTypePlugin(): Plugin {
  return {
    name: "deepkit-type",
    enforce: "pre",
    transform(code, file_name) {
      if (!file_name.endsWith(".type.ts")) return;

      const transformed = transpileModule(code, {
        fileName: file_name,
        // @ts-expect-error - HACK: meh, it'll be fine to ignore type checking this
        compilerOptions: TSCONFIG.compilerOptions,

        transformers: {
          before: [transformer],
          afterDeclarations: [declarationTransformer],
        },
      });

      console.log({
        unchanged: code === transformed.outputText,
        code,
        outputText: transformed.outputText,
      });

      return {
        code: transformed.outputText,
        map: transformed.sourceMapText,
      };
    },
  };
}
