{
  description = "P4sTela's portfolio site (Astro + React + Tailwind, Cloudflare Workers)";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodejs_22
            pnpm
            wrangler
          ];

          shellHook = ''
            echo "portfolio dev shell: node $(node --version) / pnpm $(pnpm --version)"
            # pnpm 10+ は依存のビルドスクリプトを既定で実行しない。
            # 初回は `pnpm approve-builds` で esbuild / sharp / workerd を承認するか、
            # `pnpm install --ignore-scripts` で通す（後者でもビルドは通る）。
          '';
        };
      });
}
