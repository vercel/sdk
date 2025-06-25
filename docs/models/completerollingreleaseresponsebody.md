# CompleteRollingReleaseResponseBody

The response format for rolling release endpoints that return rolling release information

## Example Usage

```typescript
import { CompleteRollingReleaseResponseBody } from "@vercel/sdk/models/completerollingreleaseop.js";

let value: CompleteRollingReleaseResponseBody = {
  rollingRelease: {
    state: "ACTIVE",
    currentDeployment: {
      id: "dpl_abc123",
      name: "my-shop@main",
      url: "my-shop.vercel.app",
      target: "production",
      source: "git",
      createdAt: 1716206500000,
      readyState: "READY",
      readyStateAt: 1716206800000,
    },
    canaryDeployment: {
      id: "dpl_def456",
      name: "my-shop@9c7e2f4",
      url: "9c7e2f4-my-shop.vercel.app",
      target: "production",
      source: "git",
      createdAt: 1716210100000,
      readyState: "READY",
      readyStateAt: 1716210400000,
    },
    queuedDeploymentId: "dpl_ghi789",
    advancementType: "manual-approval",
    stages: [
      {
        index: 0,
        isFinalStage: false,
        targetPercentage: 5,
        requireApproval: true,
        duration: null,
      },
      {
        index: 1,
        isFinalStage: false,
        targetPercentage: 25,
        requireApproval: true,
        duration: null,
      },
      {
        index: 2,
        isFinalStage: false,
        targetPercentage: 60,
        requireApproval: true,
        duration: null,
      },
      {
        index: 3,
        isFinalStage: true,
        targetPercentage: 100,
        requireApproval: false,
        duration: null,
      },
    ],
    activeStage: {
      index: 1,
      isFinalStage: false,
      targetPercentage: 25,
      requireApproval: true,
      duration: null,
    },
    nextStage: {
      index: 2,
      isFinalStage: false,
      targetPercentage: 60,
      requireApproval: true,
      duration: null,
    },
    startedAt: 1716210500000,
    updatedAt: 1716210600000,
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `rollingRelease`                                                                                               | [models.CompleteRollingReleaseRollingRelease](../models/completerollingreleaserollingrelease.md)               | :heavy_check_mark:                                                                                             | Rolling release information including configuration and document details, or null if no rolling release exists |