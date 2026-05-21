# Sources1

## Example Usage

```typescript
import { Sources1 } from "@vercel/sdk/models/team.js";

let value: Sources1 = {
  provider: "gitlab",
  org: "<value>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `provider`                                             | [models.SourcesProvider](../models/sourcesprovider.md) | :heavy_check_mark:                                     | N/A                                                    |
| `org`                                                  | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |