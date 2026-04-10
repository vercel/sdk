# DefaultProjectJobs

Default job configuration applied to new projects created in this team.

## Example Usage

```typescript
import { DefaultProjectJobs } from "@vercel/sdk/models/team.js";

let value: DefaultProjectJobs = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `lint`                                                                  | [models.Lint](../models/lint.md)                                        | :heavy_minus_sign:                                                      | Default job configuration applied to new projects created in this team. |
| `typecheck`                                                             | [models.Typecheck](../models/typecheck.md)                              | :heavy_minus_sign:                                                      | Default job configuration applied to new projects created in this team. |