# CreateConnectorCreationMode

How the connector row was originally created. New create paths stamp this explicitly; older rows may omit it.

## Example Usage

```typescript
import { CreateConnectorCreationMode } from "@vercel/sdk/models/createconnectorop.js";

let value: CreateConnectorCreationMode = "managed";
```

## Values

```typescript
"managed" | "manual"
```