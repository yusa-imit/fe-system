import { moduleFederationPlugin } from "@module-federation/sdk";
import { EventHandler } from "h3";

export interface ModuleFederationPluginOptions
  extends moduleFederationPlugin.ModuleFederationPluginOptions {}

export interface PolarisMiddlewareConfig {
  path: string;
  handler: EventHandler;
}

export interface PolarisServerConfig {
  port?: number;
  host?: string;
}

export interface PolarisConfig {
  name?: string;
  entry: string;
  outDir?: string;
  pagesDir?: string;
  modulesDir?: string;
  apiDir?: string;
  publicPath?: string;
  moduleFederation?: moduleFederationPlugin.ModuleFederationPluginOptions;
  server?: PolarisServerConfig;
}
