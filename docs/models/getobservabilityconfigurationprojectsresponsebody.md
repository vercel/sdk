# GetObservabilityConfigurationProjectsResponseBody

## Example Usage

```typescript
import { GetObservabilityConfigurationProjectsResponseBody } from "@vercel/sdk/models/getobservabilityconfigurationprojectsop.js";

let value: GetObservabilityConfigurationProjectsResponseBody = {
  disabledProjects: [
    {
      id: "<id>",
      disabledAt: 7450.06,
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `disabledProjects`                                         | [models.DisabledProjects](../models/disabledprojects.md)[] | :heavy_check_mark:                                         | N/A                                                        |