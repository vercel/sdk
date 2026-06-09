# PatchTeamSources2

## Example Usage

```typescript
import { PatchTeamSources2 } from "@vercel/sdk/models/patchteamop.js";

let value: PatchTeamSources2 = {
  provider: "gitlab",
  namespace: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `provider`         | *"gitlab"*         | :heavy_check_mark: | N/A                |
| `namespace`        | *string*           | :heavy_check_mark: | N/A                |
| `project`          | *string*           | :heavy_minus_sign: | N/A                |