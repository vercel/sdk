# SchedulesModule

Set when this build serves a Python schedule's module: the `@schedule` handlers that importing `module` registers.

## Example Usage

```typescript
import { SchedulesModule } from "@vercel/sdk/models/canceldeploymentresponsebody.js";

let value: SchedulesModule = {
  module: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `module`           | *string*           | :heavy_check_mark: | N/A                |