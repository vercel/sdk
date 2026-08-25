# Includes

Optional expansions populated by `?include=...` on the list endpoint.

## Example Usage

```typescript
import { Includes } from "@vercel/sdk/models/createconnectorop.js";

let value: Includes = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `projects`                                                             | [models.CreateConnectorProjects](../models/createconnectorprojects.md) | :heavy_minus_sign:                                                     | Set by `?include=projects`. Capped at 100 per client.                  |