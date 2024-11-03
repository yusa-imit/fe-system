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
  middleware?: PolarisMiddlewareConfig[];
}

export interface PolarisConfig {
  entry: string;
  outDir?: string;
  publicPath?: string;
  moduleFederation?: moduleFederationPlugin.ModuleFederationPluginOptions;
  server?: PolarisServerConfig;
}
