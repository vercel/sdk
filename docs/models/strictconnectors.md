# StrictConnectors

When enabled, creating and managing connectors requires Owner role or the ConnectorManager permission.

## Example Usage

```typescript
import { StrictConnectors } from "@vercel/sdk/models/team.js";

let value: StrictConnectors = {
  enabled: true,
  updatedAt: 1652.85,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `enabled`          | *boolean*          | :heavy_check_mark: | N/A                |
| `updatedAt`        | *number*           | :heavy_check_mark: | N/A                |