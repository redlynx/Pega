window.swaggerSpec={
  "swagger" : "2.0",
  "info" : {
    "description" : "Deployment Manager services for version 5",
    "version" : "0.0.1",
    "title" : "Deployment Manager Services"
  },
  "host" : "10.225.93.254:9080",
  "basePath" : "/prweb/PRRestService/DeploymentManager/v1/",
  "tags" : [ {
    "name" : "Pipelines"
  }, {
    "name" : "Deployments"
  }, {
    "name" : "Tasks"
  }, {
    "name" : "Artifacts"
  }, {
    "name" : "Operators"
  }, {
    "name" : "Roles"
  }, {
    "name" : "Privileges"
  }, {
    "name" : "Pipeline Templates",
    "description" : "(Incubating)"
  }, {
    "name" : "Environment Templates",
    "description" : "(Incubating)"
  }, {
    "name" : "Task definitions",
    "description" : "(Incubating)"
  }, {
    "name" : "Reports",
    "description" : "(Incubating)"
  }, {
    "name" : "Policy"
  } ],
  "paths" : {
    "/data/tasks" : {
      "get" : {
        "tags" : [ "Task definitions" ],
        "summary" : "Get the list of task definitions present in the system. [This api is incubating and is subject to change in future.]",
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "Successfully fetched requested data.",
            "schema" : {
              "type" : "object",
              "properties" : {
                "data" : {
                  "type" : "array",
                  "items" : {
                    "$ref" : "#/definitions/taskDefinitions"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/privileges" : {
      "get" : {
        "tags" : [ "Privileges" ],
        "parameters" : [ {
          "name" : "appName",
          "type" : "string",
          "in" : "query",
          "required" : false,
          "description" : "Get all the privileges mapped to a role if the role name is specified."
        } ],
        "summary" : "Get list of all the Deployment manager privileges present in the system.",
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "Successfully fetched requested data.",
            "schema" : {
              "type" : "object",
              "properties" : {
                "data" : {
                  "type" : "array",
                  "items" : {
                    "$ref" : "#/definitions/privilege"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/roles" : {
      "get" : {
        "tags" : [ "Roles" ],
        "parameters" : [ {
          "name" : "appName",
          "type" : "string",
          "in" : "query",
          "required" : false,
          "description" : "Application Name"
        }, {
          "name" : "appVersion",
          "type" : "string",
          "in" : "query",
          "required" : false,
          "description" : "Application Version"
        }, {
          "name" : "fetchPrivileges",
          "type" : "boolean",
          "in" : "query",
          "required" : false,
          "description" : "Fetches all the privileges for each role, if the value specified is true."
        }, {
          "name" : "fetchAll",
          "type" : "boolean",
          "in" : "query",
          "required" : false,
          "description" : "Fetches all the the privileges irrespective of the context of the requestor if the value specified is true."
        } ],
        "summary" : "Get the list of roles associated to an application",
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "Successfully fetched requested data.",
            "schema" : {
              "type" : "object",
              "properties" : {
                "data" : {
                  "type" : "array",
                  "items" : {
                    "$ref" : "#/definitions/roles"
                  }
                }
              }
            }
          }
        }
      },
      "post" : {
        "tags" : [ "Roles" ],
        "summary" : "Creates a role",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "body",
          "description" : "",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/roles"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "Successfully created the role.",
            "schema" : {
              "$ref" : "#/definitions/roles"
            }
          }
        }
      }
    },
    "/roles/{id}" : {
      "parameters" : [ {
        "name" : "id",
        "type" : "string",
        "in" : "path",
        "required" : true,
        "description" : "Role name"
      } ],
      "get" : {
        "tags" : [ "Roles" ],
        "summary" : "get the details of a role",
        "description" : "get the details of a role with the given id",
        "parameters" : [ {
          "name" : "fetchPrivileges",
          "type" : "boolean",
          "in" : "query",
          "required" : false,
          "description" : "fetches privileges for the role, if it is true"
        } ],
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "Successfully fetches the role details.",
            "schema" : {
              "$ref" : "#/definitions/roles"
            }
          }
        }
      },
      "put" : {
        "tags" : [ "Roles" ],
        "summary" : "Update a role",
        "description" : "Update a role with given description and privileges",
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "body",
          "description" : "",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/roles"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "Successfully created the role",
            "schema" : {
              "$ref" : "#/definitions/roles"
            }
          }
        }
      },
      "delete" : {
        "tags" : [ "Roles" ],
        "summary" : "Deletes a role",
        "description" : "Deletes a role",
        "responses" : {
          "201" : {
            "description" : "Successfully deleted the role"
          }
        }
      }
    },
    "/operators" : {
      "get" : {
        "tags" : [ "Operators" ],
        "summary" : "Get list of operators in the system",
        "parameters" : [ {
          "name" : "FetchAllOperators",
          "type" : "boolean",
          "in" : "query",
          "required" : false,
          "description" : "Fetch all operators in the system if the value is true. If false, it will return all operators present in Deployment Manager."
        } ],
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "Successfully fetched requested data.",
            "schema" : {
              "type" : "object",
              "properties" : {
                "data" : {
                  "type" : "array",
                  "items" : {
                    "$ref" : "#/definitions/operators"
                  }
                }
              }
            }
          }
        }
      },
      "post" : {
        "tags" : [ "Operators" ],
        "summary" : "Creates an operator. If an operator already exists in the system but not in Deployment manager portal, it will be added to Deployment manager.",
        "produces" : [ "application/json" ],
        "consumes" : [ "application/json" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "body",
          "description" : "",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/operators"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "Successfully created operator.",
            "schema" : {
              "$ref" : "#/definitions/createOperator"
            }
          },
          "400" : {
            "description" : "Operator already exixts.",
            "schema" : {
              "$ref" : "#/definitions/createOperator_OperatorExists"
            }
          }
        }
      }
    },
    "/operators/{id}" : {
      "parameters" : [ {
        "name" : "id",
        "type" : "string",
        "in" : "path",
        "required" : true,
        "description" : "OperatorID"
      } ],
      "put" : {
        "tags" : [ "Operators" ],
        "summary" : "Updates an operator",
        "description" : "Updates an operator with given details.",
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "body",
          "description" : "",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/operators"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Successfully updated the operator.",
            "schema" : {
              "$ref" : "#/definitions/operators"
            }
          }
        }
      },
      "delete" : {
        "tags" : [ "Operators" ],
        "summary" : "Deletes an operator",
        "description" : "Deletes an operator",
        "responses" : {
          "201" : {
            "description" : "Successfully deleted the role."
          }
        }
      }
    },
    "/tasks" : {
      "parameters" : [ {
        "name" : "EnvironmentID",
        "type" : "string",
        "in" : "query",
        "required" : false,
        "description" : "Get list of tasks based on EnvironmentID"
      }, {
        "name" : "TaskStatus",
        "type" : "string",
        "in" : "query",
        "required" : false,
        "description" : "Get list of tasks based on task status"
      }, {
        "name" : "DeploymentID",
        "type" : "string",
        "in" : "query",
        "required" : false,
        "description" : "Get list of tasks based on DeploymentID"
      }, {
        "name" : "PipelineID",
        "type" : "string",
        "in" : "query",
        "required" : false,
        "description" : "Get list of tasks based on PipelineID"
      }, {
        "name" : "Latest",
        "type" : "string",
        "in" : "query",
        "required" : false,
        "description" : "Get latest task"
      } ],
      "get" : {
        "tags" : [ "Tasks" ],
        "summary" : "Get list of tasks. By default, it will return all the 'Open-Ready' tasks if no parameter is specified.",
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "Successfully fetched requested data",
            "schema" : {
              "type" : "object",
              "properties" : {
                "data" : {
                  "type" : "array",
                  "items" : {
                    "$ref" : "#/definitions/task"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/tasks/{id}" : {
      "parameters" : [ {
        "name" : "id",
        "type" : "string",
        "in" : "path",
        "required" : true
      } ],
      "get" : {
        "tags" : [ "Tasks" ],
        "summary" : "Get information about a task",
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "Successfully fetched requested data",
            "schema" : {
              "$ref" : "#/definitions/task"
            }
          },
          "500" : {
            "description" : "Internal server error",
            "schema" : {
              "type" : "object",
              "properties" : {
                "errors" : {
                  "type" : "array",
                  "items" : {
                    "$ref" : "#/definitions/Error"
                  }
                }
              }
            }
          }
        }
      },
      "put" : {
        "tags" : [ "Tasks" ],
        "summary" : "Update the task information for the given task ID",
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "body",
          "description" : "Updates the output parameters or intermediate actions",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/taskUpdateRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Successfully updated requested data",
            "schema" : {
              "$ref" : "#/definitions/task"
            }
          },
          "400" : {
            "description" : "Bad request error",
            "schema" : {
              "type" : "object",
              "properties" : {
                "errors" : {
                  "type" : "array",
                  "items" : {
                    "$ref" : "#/definitions/error400"
                  }
                }
              }
            }
          },
          "500" : {
            "description" : "Internal server error",
            "schema" : {
              "type" : "object",
              "properties" : {
                "errors" : {
                  "type" : "array",
                  "items" : {
                    "$ref" : "#/definitions/Error"
                  }
                }
              }
            }
          },
          "500*" : {
            "description" : "Internal server error",
            "schema" : {
              "type" : "object",
              "properties" : {
                "errors" : {
                  "type" : "array",
                  "items" : {
                    "$ref" : "#/definitions/jsonerror"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/artifacts" : {
      "get" : {
        "tags" : [ "Artifacts" ],
        "summary" : "Get list of artifacts. If no parameter specified, it will list all the artifacts.",
        "description" : "Get list of artifacts",
        "parameters" : [ {
          "name" : "deploymentID",
          "type" : "string",
          "in" : "query",
          "required" : false,
          "description" : "Get the artifacts for the given deploymentID"
        }, {
          "name" : "pipelineID",
          "type" : "string",
          "in" : "query",
          "required" : false,
          "description" : "Get the artifacts for the given pipelineID"
        }, {
          "name" : "repositoryType",
          "type" : "string",
          "in" : "query",
          "required" : false,
          "description" : "Get the artifacts which are of the given repository type"
        }, {
          "name" : "fetchPipelinesList",
          "type" : "boolean",
          "in" : "query",
          "required" : false,
          "description" : "Get the pipeline info along with artifact when set to true"
        }, {
          "name" : "applicationName",
          "type" : "string",
          "in" : "query",
          "required" : false,
          "description" : "Get the artifacts for the given applicaiton"
        }, {
          "name" : "applicationVersion",
          "type" : "string",
          "in" : "query",
          "required" : false,
          "description" : "Get the artifacts for the given applicaiton version"
        } ],
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "Successfully fetched requested data",
            "schema" : {
              "type" : "object",
              "properties" : {
                "data" : {
                  "type" : "array",
                  "items" : {
                    "$ref" : "#/definitions/archive"
                  }
                }
              }
            }
          }
        }
      },
      "post" : {
        "tags" : [ "Artifacts" ],
        "summary" : "Creates an artifact resource",
        "description" : "Creates an artifcat resource for each artifact for the deployment ID.",
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "body",
          "description" : "",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/archive"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "Successfully created artifact resource",
            "schema" : {
              "$ref" : "#/definitions/archive"
            }
          }
        }
      }
    },
    "/artifacts/{id}" : {
      "parameters" : [ {
        "name" : "id",
        "type" : "string",
        "in" : "path",
        "required" : true
      } ],
      "get" : {
        "tags" : [ "Artifacts" ],
        "summary" : "Get information about an artifact",
        "description" : "",
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "Successfully fetched requested data",
            "schema" : {
              "$ref" : "#/definitions/archive"
            }
          }
        }
      }
    },
    "/pipelines" : {
      "get" : {
        "tags" : [ "Pipelines" ],
        "summary" : "Get list of all the pipelines.",
        "description" : "",
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "Successfully fetched requested data",
            "schema" : {
              "type" : "object",
              "properties" : {
                "data" : {
                  "type" : "array",
                  "items" : {
                    "$ref" : "#/definitions/pipelines"
                  }
                }
              }
            }
          }
        }
      },
      "post" : {
        "tags" : [ "Pipelines" ],
        "summary" : "Creates a pipeline",
        "description" : "Creates a pipeline",
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "body",
          "description" : "",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/pipeline_creation_request"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "Successfully creates the pipeline.",
            "schema" : {
              "$ref" : "#/definitions/pipeline"
            }
          }
        }
      }
    },
    "/pipelines/{id}" : {
      "parameters" : [ {
        "name" : "id",
        "type" : "string",
        "in" : "path",
        "required" : true,
        "description" : "Pipeline ID"
      } ],
      "put" : {
        "tags" : [ "Pipelines" ],
        "summary" : "Updates a pipeline for the given pipelineID",
        "description" : "Updates a pipeline for the given pipelineID",
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "body",
          "description" : "",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/pipeline"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Successfully updates the pipeline.",
            "schema" : {
              "$ref" : "#/definitions/pipeline"
            }
          }
        }
      },
      "get" : {
        "tags" : [ "Pipelines" ],
        "summary" : "Get information about a pipeline",
        "description" : "",
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "Successfully fetched requested data",
            "schema" : {
              "$ref" : "#/definitions/pipeline"
            }
          }
        }
      },
      "delete" : {
        "tags" : [ "Pipelines" ],
        "summary" : "Deletes a pipeline",
        "description" : "Deletes a pipeline",
        "responses" : {
          "201" : {
            "description" : "Successfully deleted the specified pipeline"
          }
        }
      }
    },
    "/pipelines/{id}/archive" : {
      "parameters" : [ {
        "name" : "id",
        "type" : "string",
        "in" : "path",
        "required" : true,
        "description" : "Pipeline ID"
      } ],
      "put" : {
        "tags" : [ "Pipelines" ],
        "summary" : "Archives a pipeline for the given pipelineID",
        "description" : "Archives a pipeline for the given pipelineID",
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "Successfully updates the pipeline.",
            "schema" : {
              "$ref" : "#/definitions/pipeline"
            }
          }
        }
      }
    },
    "/pipelines/{id}/activate" : {
      "parameters" : [ {
        "name" : "id",
        "type" : "string",
        "in" : "path",
        "required" : true,
        "description" : "Pipeline ID"
      } ],
      "put" : {
        "tags" : [ "Pipelines" ],
        "summary" : "Activates a pipeline for the given pipelineID which is archived",
        "description" : "Activates a pipeline for the given pipelineID which is archived",
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "Successfully updates the pipeline.",
            "schema" : {
              "$ref" : "#/definitions/pipeline"
            }
          }
        }
      }
    },
    "/pipelines/{id}/disable" : {
      "parameters" : [ {
        "name" : "id",
        "type" : "string",
        "in" : "path",
        "required" : true,
        "description" : "Pipeline ID"
      } ],
      "put" : {
        "tags" : [ "Pipelines" ],
        "summary" : "Disables a pipeline for the given pipelineID, which will prevent triggering new deployments for the pipeline",
        "description" : "Disables a pipeline for the given pipelineID, which will prevent triggering new deployments for the pipeline",
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "Successfully updates the pipeline.",
            "schema" : {
              "$ref" : "#/definitions/pipeline"
            }
          }
        }
      }
    },
    "/pipelines/{id}/enable" : {
      "parameters" : [ {
        "name" : "id",
        "type" : "string",
        "in" : "path",
        "required" : true,
        "description" : "Pipeline ID"
      } ],
      "put" : {
        "tags" : [ "Pipelines" ],
        "summary" : "Enables a pipeline for the given pipelineID which is disabled",
        "description" : "Enables a pipeline for the given pipelineID which is disabled",
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "Successfully updates the pipeline.",
            "schema" : {
              "$ref" : "#/definitions/pipeline"
            }
          }
        }
      }
    },
    "/pipelines/{pipelineid}/deployments" : {
      "parameters" : [ {
        "name" : "pipelineid",
        "type" : "string",
        "in" : "path",
        "required" : true
      } ],
      "post" : {
        "tags" : [ "Deployments" ],
        "summary" : "Trigger a deployment for the given pipelineID",
        "description" : "Trigger a deployment for the given pipelineID. This API is used to trigger any kind of pipeline (Ex. DeploymentPipeline, MergePipeline etc.,). For triggering a merge pipeline, branchName should be passed in the request body.",
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "body",
          "description" : "",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/deployment_creation_request"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Successfully triggered deployment",
            "schema" : {
              "$ref" : "#/definitions/deployment"
            }
          }
        }
      },
      "get" : {
        "tags" : [ "Deployments" ],
        "summary" : "Get list of deployments for the given pipelineID",
        "description" : "Get list of deployments for the given pipelineID",
        "parameters" : [ {
          "name" : "fetchQueuedDeployments",
          "type" : "boolean",
          "in" : "query",
          "required" : false,
          "description" : "Get Queued deployments when set to true"
        }, {
          "name" : "fetchHistoryDetails",
          "type" : "boolean",
          "in" : "query",
          "required" : false,
          "description" : "Get deployment audit details when set to true"
        }, {
          "name" : "fetchOpenAndPendingPromotionDeployments",
          "type" : "boolean",
          "in" : "query",
          "required" : false,
          "description" : "Get open and pending promotion deployments when set to true"
        }, {
          "name" : "fetchDeploymentsInPendingPromotion",
          "type" : "boolean",
          "in" : "query",
          "required" : false,
          "description" : "Get pending promotion deployments when set to true"
        }, {
          "name" : "latest",
          "type" : "boolean",
          "in" : "query",
          "required" : false,
          "description" : "fetch the list which contains latest deployment when set to true"
        } ],
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "Successfully fetched requested data",
            "schema" : {
              "type" : "object",
              "properties" : {
                "data" : {
                  "type" : "array",
                  "items" : {
                    "$ref" : "#/definitions/deployment"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/deployments/{id}" : {
      "parameters" : [ {
        "name" : "id",
        "type" : "string",
        "in" : "path",
        "required" : true,
        "description" : "Deployment ID"
      } ],
      "get" : {
        "tags" : [ "Deployments" ],
        "summary" : "Get information about a deployment.",
        "description" : "Get information about a deployment for the given deploymentID.",
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "Successfully fetched requested data",
            "schema" : {
              "$ref" : "#/definitions/deployment"
            }
          }
        }
      }
    },
    "/deployments/{id}/abort" : {
      "parameters" : [ {
        "name" : "id",
        "type" : "string",
        "in" : "path",
        "required" : true,
        "description" : "Deployment ID"
      } ],
      "put" : {
        "tags" : [ "Deployments" ],
        "summary" : "Abort the deployment",
        "description" : "",
        "parameters" : [ {
          "in" : "body",
          "name" : "body",
          "required" : true,
          "schema" : {
            "type" : "object",
            "properties" : {
              "reasonForAbort" : {
                "type" : "string",
                "example" : "Build got errored out."
              }
            }
          }
        } ],
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "Successfully aborted the deployment.",
            "schema" : {
              "$ref" : "#/definitions/deployment"
            }
          },
          "400" : {
            "description" : "Bad request error",
            "schema" : {
              "type" : "object",
              "properties" : {
                "errors" : {
                  "type" : "array",
                  "items" : {
                    "$ref" : "#/definitions/error"
                  }
                }
              }
            }
          },
          "500" : {
            "description" : "Internal server error",
            "schema" : {
              "type" : "object",
              "properties" : {
                "errors" : {
                  "type" : "array",
                  "items" : {
                    "$ref" : "#/definitions/error"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/deployments/{id}/skip" : {
      "parameters" : [ {
        "name" : "id",
        "type" : "string",
        "in" : "path",
        "required" : true,
        "description" : "Deployment ID"
      } ],
      "put" : {
        "tags" : [ "Deployments" ],
        "summary" : "Skip the failed task of the deployment",
        "description" : "",
        "parameters" : [ {
          "in" : "body",
          "name" : "body",
          "required" : true,
          "schema" : {
            "type" : "object",
            "properties" : {
              "reasonForSkip" : {
                "type" : "string",
                "example" : "Skipping the failed task to resume the deployment with next task."
              }
            }
          }
        } ],
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "Successfully skipped the failed task of the deployment.",
            "schema" : {
              "$ref" : "#/definitions/deployment"
            }
          },
          "400" : {
            "description" : "Bad request error",
            "schema" : {
              "type" : "object",
              "properties" : {
                "errors" : {
                  "type" : "array",
                  "items" : {
                    "$ref" : "#/definitions/error"
                  }
                }
              }
            }
          },
          "500" : {
            "description" : "Internal server error",
            "schema" : {
              "type" : "object",
              "properties" : {
                "errors" : {
                  "type" : "array",
                  "items" : {
                    "$ref" : "#/definitions/error"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/deployments/{id}/pause" : {
      "parameters" : [ {
        "name" : "id",
        "type" : "string",
        "in" : "path",
        "required" : true,
        "description" : "Deployment ID"
      }, {
        "in" : "body",
        "name" : "body",
        "required" : false,
        "schema" : {
          "type" : "object",
          "properties" : {
            "reasonForPause" : {
              "type" : "string",
              "example" : "Pausing the deployment temporarily"
            }
          }
        }
      } ],
      "put" : {
        "tags" : [ "Deployments" ],
        "summary" : "Pause the deployment",
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "Successfully paused the deployment.",
            "schema" : {
              "$ref" : "#/definitions/deployment"
            }
          },
          "400" : {
            "description" : "Bad request error",
            "schema" : {
              "type" : "object",
              "properties" : {
                "errors" : {
                  "type" : "array",
                  "items" : {
                    "$ref" : "#/definitions/error"
                  }
                }
              }
            }
          },
          "500" : {
            "description" : "Internal server error",
            "schema" : {
              "type" : "object",
              "properties" : {
                "errors" : {
                  "type" : "array",
                  "items" : {
                    "$ref" : "#/definitions/error"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/deployments/{id}/resume" : {
      "parameters" : [ {
        "name" : "id",
        "type" : "string",
        "in" : "path",
        "required" : true,
        "description" : "Deployment ID"
      }, {
        "in" : "body",
        "name" : "body",
        "required" : false,
        "schema" : {
          "type" : "object",
          "properties" : {
            "reasonForPause" : {
              "type" : "string",
              "example" : "Resume deployment comment."
            }
          }
        }
      } ],
      "put" : {
        "tags" : [ "Deployments" ],
        "summary" : "Resume the deployment if the deployment is in paused state.",
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "Successfully resumed the deployment.",
            "schema" : {
              "$ref" : "#/definitions/deployment"
            }
          },
          "400" : {
            "description" : "Bad request error",
            "schema" : {
              "type" : "object",
              "properties" : {
                "errors" : {
                  "type" : "array",
                  "items" : {
                    "$ref" : "#/definitions/error"
                  }
                }
              }
            }
          },
          "500" : {
            "description" : "Internal server error",
            "schema" : {
              "type" : "object",
              "properties" : {
                "errors" : {
                  "type" : "array",
                  "items" : {
                    "$ref" : "#/definitions/error"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/deployments/{id}/promote" : {
      "parameters" : [ {
        "name" : "id",
        "type" : "string",
        "in" : "path",
        "required" : true,
        "description" : "Deployment ID"
      } ],
      "put" : {
        "tags" : [ "Deployments" ],
        "summary" : "promotes the deployment if the deployment is in pending-promotion state in a manual transition stage. Other pending-deployments in the same stage preceding this deployment will be marked as superseded",
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "Successfully promoted the deployment.",
            "schema" : {
              "$ref" : "#/definitions/deployment"
            }
          },
          "400" : {
            "description" : "Bad request error",
            "schema" : {
              "type" : "object",
              "properties" : {
                "errors" : {
                  "type" : "array",
                  "items" : {
                    "$ref" : "#/definitions/error"
                  }
                }
              }
            }
          },
          "500" : {
            "description" : "Internal server error",
            "schema" : {
              "type" : "object",
              "properties" : {
                "errors" : {
                  "type" : "array",
                  "items" : {
                    "$ref" : "#/definitions/notInPendingState"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/pipeline_templates/{id}" : {
      "parameters" : [ {
        "name" : "id",
        "type" : "string",
        "in" : "path",
        "required" : true,
        "description" : "Pipeline template"
      } ],
      "get" : {
        "tags" : [ "Pipeline Templates" ],
        "summary" : "Get information about a pipeline template. [This api is incubating and is subject to change in future.]",
        "description" : "",
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "Successfully fetched requested data",
            "schema" : {
              "$ref" : "#/definitions/pipeline_template"
            }
          }
        }
      }
    },
    "/pipeline_templates" : {
      "get" : {
        "tags" : [ "Pipeline Templates" ],
        "summary" : "Get all the pipeline templates. [This api is incubating and is subject to change in future.]",
        "description" : "Get all the pipeline templates.",
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "Successfully fetched requested data",
            "schema" : {
              "$ref" : "#/definitions/pipeline_templates"
            }
          }
        }
      }
    },
    "/environment_templates" : {
      "parameters" : [ {
        "name" : "EnvironmentType",
        "type" : "string",
        "in" : "query",
        "required" : false,
        "description" : "Environment type"
      } ],
      "get" : {
        "tags" : [ "Environment Templates" ],
        "summary" : "Get list of environment templates. [This api is incubating and is subject to change in future.]",
        "description" : "Get list of environment templates. If query parameter PipelineType is passed, it will return the environment templates specific to that pipeline type.",
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "Successfully fetched requested data",
            "schema" : {
              "$ref" : "#/definitions/environment_template"
            }
          }
        }
      }
    },
    "/pipelines/{id}/report/{reportName}" : {
      "parameters" : [ {
        "name" : "id",
        "type" : "string",
        "in" : "path",
        "required" : true
      }, {
        "name" : "reportName",
        "type" : "string",
        "in" : "path",
        "required" : true
      }, {
        "name" : "deploymentFrom",
        "in" : "query",
        "type" : "string"
      }, {
        "name" : "deploymentTill",
        "in" : "query",
        "type" : "string"
      } ],
      "get" : {
        "tags" : [ "Reports" ],
        "summary" : "gets pipeline level metrics. [This api is incubating and is subject to change in future.]",
        "description" : " Following are the available reports.\n* **successRate** - Calculated as a percentage of total successful deployments by total deployments.\n* **successFrequency** - Deployment Success Frequency calculated as average of time between successful deployments all through the stages irrespective of the end stage being production or not.\n* **deploymentSpeed** - Calculated as average time taken by a successful deployment through all the stages of the lifecycle.\n* **failureRate** - Calculated as the average number of failures in a deployment or merge.\n* **avgTimeInStage** - Calculated as the average time taken in a satge.\n* **tasksByFailures** - Calculated as the number of failed tasks.\n* **avgTimeByTask** - Calculated as the average time taken in  each task.\n",
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "Successfully gets pipeline report",
            "schema" : {
              "$ref" : "#/definitions/Reports"
            }
          },
          "500" : {
            "description" : "Internal server error",
            "schema" : {
              "$ref" : "#/definitions/Reports"
            }
          }
        }
      }
    },
    "/policies" : {
      "get" : {
        "tags" : [ "Policy" ],
        "summary" : "Get all the policies.",
        "description" : "Get all the policies.",
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "Successfully fetched requested data",
            "schema" : {
              "$ref" : "#/definitions/policies"
            }
          }
        }
      },
      "post" : {
        "tags" : [ "Policy" ],
        "summary" : "Create policy",
        "description" : "Create policy with speacified details",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "body",
          "description" : "",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/policy_create"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Successfully fetched requested data",
            "schema" : {
              "$ref" : "#/definitions/policy"
            }
          }
        }
      }
    },
    "/policies/{id}" : {
      "parameters" : [ {
        "name" : "id",
        "type" : "string",
        "in" : "path",
        "required" : true
      } ],
      "get" : {
        "tags" : [ "Policy" ],
        "summary" : "Get information about an specified policy",
        "description" : "Get information about an specified policy",
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "Successfully fetched requested data",
            "schema" : {
              "$ref" : "#/definitions/policy"
            }
          }
        }
      },
      "put" : {
        "tags" : [ "Policy" ],
        "summary" : "Updates specified policy",
        "description" : "Updates policy with given details if policy exists",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "body",
          "description" : "",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/policy_update"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Successfully fetched requested data",
            "schema" : {
              "$ref" : "#/definitions/policy"
            }
          }
        }
      },
      "delete" : {
        "tags" : [ "Policy" ],
        "summary" : "Delete specified policy",
        "description" : "Delete specified policy",
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "Successfully fetched requested data",
            "schema" : {
              "$ref" : "#/definitions/policy"
            }
          }
        }
      }
    }
  },
  "definitions" : {
    "error" : {
      "type" : "object",
      "properties" : {
        "ID" : {
          "type" : "string",
          "example" : "Pega_API_XXX"
        },
        "message" : {
          "type" : "string",
          "example" : "There was an issue fulfilling the request"
        },
        "pxObjClass" : {
          "type" : "string",
          "example" : "Pega-API-Error"
        }
      }
    },
    "notInPendingState" : {
      "type" : "object",
      "properties" : {
        "ID" : {
          "type" : "string",
          "example" : "Pega_API_XXX"
        },
        "message" : {
          "type" : "string",
          "example" : "Unable to promote deployment as it is not in pending state"
        },
        "pxObjClass" : {
          "type" : "string",
          "example" : "Pega-API-Error"
        }
      }
    },
    "createOperator_OperatorExists" : {
      "type" : "object",
      "properties" : {
        "errors" : {
          "type" : "string",
          "example" : "Unable to create/update operator. OperatorID already exists in the system"
        }
      }
    },
    "task" : {
      "type" : "object",
      "properties" : {
        "taskID" : {
          "type" : "string",
          "example" : "Task-FAE4FO5IHW38WEW"
        },
        "deploymentID" : {
          "type" : "string",
          "example" : "Dep-9BSX59TBFB1K4IB"
        },
        "environmentID" : {
          "type" : "string",
          "example" : "https://10.110.10.10:9443/prweb"
        },
        "taskIDInPipeline" : {
          "type" : "string",
          "example" : "Task-0LYEVYRD335IOXY"
        },
        "taskStatus" : {
          "type" : "string",
          "description" : "Valid values for task status",
          "enum" : [ "Open-Ready", "Open-InProgress", "Resolved-Completed", "Resolved-Rejected", "Pending-Input" ],
          "example" : [ "Open-Ready", "Open-InProgress", "Resolved-Completed", "Resolved-Rejected", "Pending-Input" ]
        },
        "taskUpdatedTime" : {
          "type" : "string",
          "example" : "20210105T111141.027 GMT"
        },
        "intermediateInput" : {
          "type" : "string",
          "example" : "Reject"
        },
        "taskInfo" : {
          "type" : "object",
          "$ref" : "#/definitions/taskInfoResponse"
        },
        "intermediateInputsList" : {
          "type" : "array",
          "items" : {
            "type" : "object",
            "$ref" : "#/definitions/parameter"
          }
        }
      }
    },
    "Error" : {
      "type" : "object",
      "properties" : {
        "ID" : {
          "type" : "string",
          "example" : "Pega_API_XXX"
        },
        "message" : {
          "type" : "string",
          "example" : "Task with the given id does not exist"
        },
        "pxObjClass" : {
          "type" : "string",
          "example" : "Pega-API-Error"
        }
      }
    },
    "error400" : {
      "type" : "object",
      "properties" : {
        "ID" : {
          "type" : "string",
          "example" : "Pega_API_XXX"
        },
        "message" : {
          "type" : "string",
          "example" : "PUT without ID is invalid"
        },
        "pxObjClass" : {
          "type" : "string",
          "example" : "Pega-API-Error"
        }
      }
    },
    "jsonerror" : {
      "type" : "object",
      "properties" : {
        "ID" : {
          "type" : "string",
          "example" : "Pega_API_XXX"
        },
        "message" : {
          "type" : "string",
          "example" : "JSON request body invalid"
        },
        "pxObjClass" : {
          "type" : "string",
          "example" : "Pega-API-Error"
        }
      }
    },
    "taskInfoResponse" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "string",
          "example" : "PEGADEVOPS-DATA-TASK DEPLOYAPPLICATION"
        },
        "description" : {
          "type" : "string",
          "example" : "Export the artifact from the repository and deploy the application in the current stage environment."
        },
        "purpose" : {
          "type" : "string",
          "example" : "Sample purpose"
        },
        "taskLabel" : {
          "type" : "string",
          "example" : "Deploy application"
        },
        "taskType" : {
          "type" : "string",
          "example" : "DeployApplication"
        },
        "taskCategory" : {
          "type" : "string",
          "example" : "package & Deploy"
        },
        "taskIconClass" : {
          "type" : "string",
          "example" : "pi pi-arrow-in"
        },
        "inputParameters" : {
          "type" : "array",
          "items" : {
            "type" : "object",
            "$ref" : "#/definitions/parameter"
          }
        },
        "outputParameters" : {
          "type" : "array",
          "items" : {
            "type" : "object",
            "$ref" : "#/definitions/parameter"
          }
        }
      }
    },
    "taskUpdateRequest" : {
      "type" : "object",
      "properties" : {
        "taskStatus" : {
          "type" : "string",
          "example" : "Open-InProgress"
        },
        "intermediateInput" : {
          "type" : "string",
          "example" : "GuardrailThreshold"
        },
        "intermediateInputParameters" : {
          "type" : "string",
          "example" : "Additonal intermediate input data as json string"
        },
        "intermediateStatusMessage" : {
          "type" : "string",
          "example" : "Manage aged updates"
        },
        "logContent" : {
          "type" : "string",
          "example" : "Task log content as base64 encoded string"
        },
        "taskInfo" : {
          "type" : "object",
          "properties" : {
            "outputParameters" : {
              "type" : "array",
              "items" : {
                "type" : "object",
                "$ref" : "#/definitions/parameter_request"
              }
            }
          }
        },
        "intermediateInputsList" : {
          "type" : "array",
          "items" : {
            "type" : "object",
            "$ref" : "#/definitions/parameter"
          }
        },
        "errors" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/error"
          }
        }
      }
    },
    "taskDefinitions" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "string",
          "example" : "PEGADEVOPS-DATA-TASK DEPLOYAPPLICATION"
        },
        "description" : {
          "type" : "string",
          "example" : "Export the artifact from the repository and deploy the application in the current stage environment."
        },
        "purpose" : {
          "type" : "string",
          "example" : "test purpose"
        },
        "taskLabel" : {
          "type" : "string",
          "example" : "Deploy application"
        },
        "taskType" : {
          "type" : "string",
          "example" : "DeployApplication"
        },
        "taskCategory" : {
          "type" : "string",
          "example" : "Package & deploy"
        },
        "taskIconClass" : {
          "type" : "string",
          "example" : "pi pi-arrow-in"
        },
        "inputParameters" : {
          "type" : "array",
          "items" : {
            "type" : "object",
            "$ref" : "#/definitions/parameter"
          }
        },
        "outputParameters" : {
          "type" : "array",
          "items" : {
            "type" : "object",
            "$ref" : "#/definitions/parameter"
          }
        },
        "supportedEnvironmentTypes" : {
          "type" : "array",
          "items" : {
            "type" : "object",
            "properties" : {
              "id" : {
                "type" : "string",
                "example" : "Production"
              }
            }
          }
        }
      }
    },
    "pipeline_task" : {
      "type" : "object",
      "properties" : {
        "taskID" : {
          "type" : "string",
          "example" : "Task-FAE4FO5IHW38WEW"
        },
        "deploymentID" : {
          "type" : "string",
          "example" : "Dep-9BSX59TBFB1K4IB"
        },
        "environmentID" : {
          "type" : "string",
          "example" : "https://10.110.10.10:9443/prweb"
        },
        "taskIDInPipeline" : {
          "type" : "string",
          "example" : "Task-0LYEVYRD335IOXY"
        },
        "taskStatus" : {
          "type" : "string",
          "example" : "Resolved-Completed"
        },
        "taskUpdatedTime" : {
          "type" : "string",
          "example" : "20210105T111141.027 GMT"
        },
        "intermediateInput" : {
          "type" : "string",
          "example" : "Approve"
        },
        "taskInfo" : {
          "type" : "object",
          "$ref" : "#/definitions/task"
        },
        "intermediateInputsList" : {
          "type" : "array",
          "items" : {
            "type" : "object",
            "$ref" : "#/definitions/parameter"
          }
        }
      }
    },
    "archive" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "string",
          "example" : "Artifact-YXKXMYAL62QT"
        },
        "name" : {
          "type" : "string",
          "example" : "RCbuild_010101_2_20201223T141351.zip"
        },
        "path" : {
          "type" : "string",
          "example" : "devops/dev/RCbuild/01.01.01/RCbuild_010101_2_20201223T141351/RCbuild_010101_2_20201223T141351.zip"
        },
        "size" : {
          "type" : "string",
          "example" : 402448.0
        },
        "type" : {
          "type" : "string",
          "example" : "Application"
        },
        "deploymentID" : {
          "type" : "string",
          "example" : "Dep-SZTLHSSSD8UHC6O"
        },
        "deploymentNumber" : {
          "type" : "string",
          "example" : "#2"
        },
        "repositoryType" : {
          "type" : "string",
          "example" : "Development"
        },
        "repositoryName" : {
          "type" : "string",
          "example" : "DEV"
        },
        "updateDateTime" : {
          "type" : "string",
          "example" : "20210105T111141.027 GMT"
        },
        "pipelneName" : {
          "type" : "string",
          "example" : "CRMPipeline"
        },
        "pipelneID" : {
          "type" : "string",
          "example" : "Pipeline-9IUNB"
        },
        "applicationName" : {
          "type" : "string",
          "example" : "CRMApp"
        },
        "applicationVersion" : {
          "type" : "string",
          "example" : "01.01.01"
        },
        "instanceList" : {
          "type" : "array",
          "items" : {
            "type" : "object",
            "properties" : {
              "instanceKey" : {
                "type" : "string",
                "example" : "DATA-ADMIN-OPERATOR-ID JOHN"
              },
              "updateDateTime" : {
                "type" : "string",
                "example" : "20210105T111141.027 GMT"
              },
              "updateOperator" : {
                "type" : "string",
                "example" : "John"
              }
            }
          }
        }
      }
    },
    "pipeline" : {
      "type" : "object",
      "properties" : {
        "pipelineID" : {
          "type" : "string",
          "example" : "Pipeline-NZ64B"
        },
        "applicationName" : {
          "type" : "string",
          "example" : "CRMApp"
        },
        "applicationVersion" : {
          "type" : "string",
          "example" : "01.01.01"
        },
        "pipelineName" : {
          "type" : "string",
          "example" : "CRM_Pipeline"
        },
        "pipelineTemplate" : {
          "type" : "string",
          "example" : "DeploymentTemplate"
        },
        "pipelineTemplateLabel" : {
          "type" : "string",
          "example" : "Deployment Pipeline"
        },
        "isAllowConcurrentDeployments" : {
          "type" : "boolean"
        },
        "isDiagnosticsComplete" : {
          "type" : "boolean"
        },
        "statusWork" : {
          "type" : "string",
          "example" : "Open-Active"
        },
        "updateOperator" : {
          "type" : "string",
          "example" : "John"
        },
        "updateDateTime" : {
          "type" : "string",
          "example" : "20201229T095307.502 GMT"
        },
        "createOpName" : {
          "type" : "string",
          "example" : "John"
        },
        "createDateTime" : {
          "type" : "string",
          "example" : "20201229T095307.502 GMT"
        },
        "stages" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/stage"
          }
        },
        "pipelineParameters" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/parameter"
          }
        },
        "externalPipelineParameters" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/externalParameter"
          }
        },
        "dependencies" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/dependency"
          }
        }
      }
    },
    "pipelines" : {
      "type" : "object",
      "properties" : {
        "pipelineID" : {
          "type" : "string",
          "example" : "Pipeline-NZ64B"
        },
        "applicationName" : {
          "type" : "string",
          "example" : "CRMApp"
        },
        "applicationVersion" : {
          "type" : "string",
          "example" : "01.01.01"
        },
        "pipelineName" : {
          "type" : "string",
          "example" : "CRMPipeline"
        },
        "pipelineTemplate" : {
          "type" : "string",
          "example" : "MergeTemplate"
        },
        "pipelineTemplateLabel" : {
          "type" : "string",
          "example" : "Merge Pipeline"
        },
        "isAllowConcurrentDeployments" : {
          "type" : "boolean"
        },
        "isDiagnosticsComplete" : {
          "type" : "boolean"
        },
        "statusWork" : {
          "type" : "string",
          "example" : "Open-Active"
        },
        "updateOperator" : {
          "type" : "string",
          "example" : "John"
        },
        "updateDateTime" : {
          "type" : "string",
          "example" : "20201229T095307.502 GMT"
        },
        "createDateTime" : {
          "type" : "string",
          "example" : "20201229T095307.502 GMT"
        }
      }
    },
    "pipeline_creation_request" : {
      "type" : "object",
      "properties" : {
        "pipelineID" : {
          "type" : "string",
          "example" : "Pipeline-NZ64B"
        },
        "applicationName" : {
          "type" : "string",
          "example" : "CRMApp"
        },
        "applicationVersion" : {
          "type" : "string",
          "example" : "01.01.01"
        },
        "pipelineName" : {
          "type" : "string",
          "example" : "CRM_Pipeline"
        },
        "pipelineTemplate" : {
          "type" : "string",
          "example" : "DeploymentTemplate"
        },
        "stages" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/pipeline_creation_stage"
          }
        },
        "pipelineParameters" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/parameter_request"
          }
        },
        "externalPipelineParameters" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/externalParameter_request"
          }
        },
        "dependencies" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/dependency"
          }
        }
      }
    },
    "deployment_creation_request" : {
      "type" : "object",
      "properties" : {
        "description" : {
          "type" : "string",
          "example" : "RC Build"
        },
        "triggeredBy" : {
          "type" : "string",
          "example" : "John"
        },
        "triggeredByOperatorName" : {
          "type" : "string",
          "example" : "John Cena"
        }
      }
    },
    "pipeline_creation_stage" : {
      "type" : "object",
      "properties" : {
        "stageName" : {
          "type" : "string",
          "example" : "Development"
        },
        "environmentID" : {
          "type" : "string",
          "example" : "https://10.110.10.10:9443/prweb"
        },
        "environmentType" : {
          "type" : "string",
          "example" : "Development"
        },
        "progression" : {
          "type" : "string",
          "example" : "Automatic"
        },
        "authenticationProfile" : {
          "type" : "string",
          "example" : "Test_Auth"
        },
        "tasks" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/task_request"
          }
        }
      }
    },
    "task_request" : {
      "type" : "object",
      "properties" : {
        "taskInfo" : {
          "type" : "object",
          "$ref" : "#/definitions/task_info_request"
        }
      }
    },
    "task_info_request" : {
      "type" : "object",
      "properties" : {
        "taskType" : {
          "type" : "string",
          "example" : "DeployApplication"
        },
        "taskLabel" : {
          "type" : "string",
          "example" : "Deploy Application"
        },
        "inputParameters" : {
          "type" : "object",
          "$ref" : "#/definitions/parameter_request"
        }
      }
    },
    "stage" : {
      "type" : "object",
      "properties" : {
        "stageName" : {
          "type" : "string",
          "example" : "Staging"
        },
        "stageLabel" : {
          "type" : "string",
          "example" : "Staging"
        },
        "environmentID" : {
          "type" : "string",
          "example" : "https://10.110.10.10:9443/prweb"
        },
        "environmentType" : {
          "type" : "string",
          "example" : "Staging"
        },
        "progression" : {
          "type" : "string",
          "example" : "Manual"
        },
        "stageIdInPipeline" : {
          "type" : "string",
          "example" : "STAGE-1234667"
        },
        "authenticationProfile" : {
          "type" : "string",
          "example" : "Test_AuthProfile"
        },
        "tasks" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/task"
          }
        }
      }
    },
    "pipeline_template" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "string",
          "example" : "DeploymentTemplate"
        },
        "stages" : {
          "type" : "array",
          "items" : {
            "type" : "object",
            "$ref" : "#/definitions/stage"
          }
        }
      }
    },
    "pipeline_templates" : {
      "type" : "array",
      "items" : {
        "type" : "object",
        "$ref" : "#/definitions/pipeline_template_list_object"
      }
    },
    "pipeline_template_list_object" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "string",
          "example" : "DeploymentTemplate"
        },
        "pipelineTemplateLabel" : {
          "type" : "string",
          "example" : "Deployment pipeline"
        }
      }
    },
    "environment_template" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "string",
          "example" : "Production"
        },
        "tasks" : {
          "type" : "array",
          "items" : {
            "type" : "object",
            "$ref" : "#/definitions/template_task"
          }
        }
      }
    },
    "roles" : {
      "type" : "object",
      "properties" : {
        "role" : {
          "type" : "string",
          "example" : "DeploymentAdmin"
        },
        "description" : {
          "type" : "string",
          "example" : "Deployment Administrator"
        },
        "privileges" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/rolePrivileges"
          }
        }
      }
    },
    "rolePrivileges" : {
      "type" : "object",
      "properties" : {
        "name" : {
          "type" : "string"
        },
        "label" : {
          "type" : "string"
        },
        "category" : {
          "type" : "string"
        }
      }
    },
    "privilege" : {
      "type" : "object",
      "properties" : {
        "name" : {
          "type" : "string",
          "example" : "AbortDeployment"
        },
        "description" : {
          "type" : "string",
          "example" : "Abort"
        },
        "category" : {
          "type" : "string",
          "example" : "Deployment"
        }
      }
    },
    "operators" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "string",
          "example" : "JOHN"
        },
        "name" : {
          "type" : "string",
          "example" : "John Cena"
        },
        "role" : {
          "type" : "string",
          "example" : "AddAdmin"
        },
        "label" : {
          "type" : "string",
          "example" : "JOHN"
        },
        "telephone" : {
          "type" : "string",
          "example" : 9999999
        },
        "importedUser" : {
          "type" : "boolean"
        },
        "addresses" : {
          "type" : "object",
          "properties" : {
            "email" : {
              "type" : "object",
              "properties" : {
                "emailaddress" : {
                  "type" : "string",
                  "example" : "john@pega.com"
                }
              }
            }
          }
        },
        "applications" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/operatorApplications"
          }
        }
      }
    },
    "createOperator" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "string",
          "example" : "JOHN"
        },
        "name" : {
          "type" : "string",
          "example" : "John Cena"
        },
        "role" : {
          "type" : "string",
          "example" : "SuperAdmin"
        },
        "label" : {
          "type" : "string",
          "example" : "John"
        },
        "telephone" : {
          "type" : "string",
          "example" : 999999999
        },
        "password" : {
          "type" : "string"
        },
        "addresses" : {
          "type" : "object",
          "properties" : {
            "email" : {
              "type" : "object",
              "properties" : {
                "emailaddress" : {
                  "type" : "string",
                  "example" : "john@pega.com"
                }
              }
            }
          }
        },
        "applications" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/operatorApplications"
          }
        }
      }
    },
    "operatorApplications" : {
      "type" : "object",
      "properties" : {
        "applicationName" : {
          "type" : "string",
          "example" : "CRM"
        }
      }
    },
    "template_task" : {
      "type" : "object",
      "properties" : {
        "ID" : {
          "type" : "string",
          "example" : "TASK-YTRETTY"
        },
        "canAddAbove" : {
          "type" : "boolean"
        },
        "canAddBelow" : {
          "type" : "boolean"
        },
        "candeleteTask" : {
          "type" : "boolean"
        },
        "taskInfo" : {
          "type" : "object",
          "properties" : {
            "taskType" : {
              "type" : "string",
              "example" : "DeployApplication"
            }
          }
        }
      }
    },
    "parameter" : {
      "type" : "object",
      "properties" : {
        "name" : {
          "type" : "string",
          "example" : "GuardrailThreshold"
        },
        "label" : {
          "type" : "string",
          "example" : "Threshold Value"
        },
        "type" : {
          "type" : "string",
          "example" : "decimal"
        },
        "description" : {
          "type" : "string",
          "example" : "Sample Description"
        },
        "value" : {
          "type" : "string",
          "example" : 97
        },
        "isRequired" : {
          "type" : "boolean",
          "example" : true
        }
      }
    },
    "externalParameter" : {
      "type" : "object",
      "properties" : {
        "name" : {
          "type" : "string",
          "example" : "RepoName"
        },
        "type" : {
          "type" : "string",
          "example" : "Text"
        },
        "description" : {
          "type" : "string",
          "example" : "Repository name"
        },
        "value" : {
          "type" : "string",
          "example" : "Sample repo"
        },
        "isRequired" : {
          "type" : "boolean",
          "example" : true
        }
      }
    },
    "parameter_request" : {
      "type" : "object",
      "properties" : {
        "name" : {
          "type" : "string"
        },
        "value" : {
          "type" : "string"
        }
      }
    },
    "externalParameter_request" : {
      "type" : "object",
      "properties" : {
        "name" : {
          "type" : "string",
          "example" : "RepoName"
        },
        "type" : {
          "type" : "string",
          "example" : "Text"
        },
        "description" : {
          "type" : "string",
          "example" : "Repository name"
        },
        "value" : {
          "type" : "string",
          "example" : "Sample repo"
        },
        "isRequired" : {
          "type" : "boolean",
          "example" : true
        }
      }
    },
    "dependency" : {
      "type" : "object",
      "properties" : {
        "sourceApplicationName" : {
          "type" : "string",
          "example" : "CRMApp"
        },
        "sourcePipelineID" : {
          "type" : "string",
          "example" : "Pipeline-1234445568"
        },
        "sourceDeploymentID" : {
          "type" : "string",
          "example" : "Dep-NDUYFD78TYREU"
        }
      }
    },
    "Reports" : {
      "type" : "object",
      "properties" : {
        "BuildFrequencyInMins" : {
          "type" : "string"
        },
        "DeploymentSuccess" : {
          "type" : "string"
        },
        "DeploymentSpeedMin" : {
          "type" : "string"
        },
        "FailureRate" : {
          "type" : "string"
        },
        "averageTimeTakenInStages" : {
          "type" : "array",
          "items" : {
            "type" : "object",
            "properties" : {
              "stageName" : {
                "type" : "string"
              },
              "averageTime" : {
                "type" : "string"
              }
            }
          }
        },
        "tasksByFailures" : {
          "type" : "array",
          "items" : {
            "type" : "object",
            "properties" : {
              "pyCount" : {
                "type" : "number"
              },
              "taskInfo" : {
                "type" : "object",
                "properties" : {
                  "taskType" : {
                    "type" : "string"
                  }
                }
              }
            }
          }
        },
        "averageTimeByTask" : {
          "type" : "array",
          "items" : {
            "type" : "object",
            "properties" : {
              "averageTime" : {
                "type" : "string"
              },
              "stageName" : {
                "type" : "string"
              },
              "taskInfo" : {
                "type" : "object",
                "properties" : {
                  "taskType" : {
                    "type" : "string"
                  }
                }
              }
            }
          }
        },
        "errors" : {
          "type" : "array",
          "items" : {
            "type" : "object",
            "properties" : {
              "errorText" : {
                "type" : "string"
              },
              "errorId" : {
                "type" : "string"
              }
            }
          }
        }
      }
    },
    "deployment" : {
      "type" : "object",
      "properties" : {
        "deploymentID" : {
          "type" : "string",
          "example" : "Dep-9BSX59TBFB1K4IB"
        },
        "pipelineID" : {
          "type" : "string",
          "example" : "Pipeline-40MZH"
        },
        "deploymentUpdatedTime" : {
          "type" : "string",
          "example" : "20201223T145538.608 GMT"
        },
        "deploymentCreatedTime" : {
          "type" : "string",
          "example" : "20201223T145538.608 GMT"
        },
        "status" : {
          "type" : "string",
          "description" : "Valid values for deployment status",
          "enum" : [ "Resolved-Completed", "Open-Queued", "Open-Error", "Open-Rollback", "Open-Paused", "Open-InProgress", "Pending-Promotion", "Resolved-Aborted" ],
          "example" : [ "Resolved-Completed", "Open-Queued", "Open-Error", "Open-Rollback", "Open-Paused", "Open-InProgress", "Pending-Promotion", "Resolved-Aborted" ]
        },
        "applicationVersion" : {
          "type" : "string",
          "example" : "01.01.01"
        },
        "reasonForAbort" : {
          "type" : "string",
          "example" : "sample abort comment"
        },
        "deploymentDescription" : {
          "type" : "string",
          "example" : "Alpha Deployemnt"
        },
        "triggeredBy" : {
          "type" : "string",
          "example" : "JOHN"
        },
        "triggeredByOperatorName" : {
          "type" : "string",
          "example" : "John Cena"
        },
        "deploymentLabel" : {
          "type" : "string",
          "example" : "Alpha"
        },
        "taskList" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/task"
          }
        },
        "pipelineObject" : {
          "type" : "object",
          "$ref" : "#/definitions/pipeline"
        },
        "sourcePipelineID" : {
          "type" : "string",
          "example" : "Pipeline-40M67"
        },
        "sourceDeploymentID" : {
          "type" : "string",
          "example" : "Dep-9BSX59TBFB1K4UY"
        },
        "sourceArtifactDeploymentID" : {
          "type" : "string"
        },
        "sourceArtifactPipelineID" : {
          "type" : "string"
        },
        "isDeployExistingArtifact" : {
          "type" : "string",
          "example" : true
        },
        "isManualTrigger" : {
          "type" : "string",
          "example" : true
        },
        "causesOfDeployment" : {
          "type" : "array",
          "items" : {
            "type" : "object",
            "properties" : {
              "causeDescription" : {
                "type" : "string",
                "example" : "sample Description"
              },
              "isManualDeployment" : {
                "type" : "string",
                "example" : true
              },
              "sourceDeploymentID" : {
                "type" : "string",
                "example" : "Dep-9BSX59TBFB1K4UY"
              },
              "sourcePipelineID" : {
                "type" : "string",
                "example" : "Pipeline-12345"
              },
              "deploymentLabel" : {
                "type" : "string",
                "example" : "Alpha build"
              },
              "triggeredBy" : {
                "type" : "string",
                "example" : "JOHN"
              },
              "triggeredByOperatorName" : {
                "type" : "string",
                "example" : "John Cena"
              },
              "branchInfo" : {
                "type" : "array",
                "items" : {
                  "$ref" : "#/definitions/branchInfo"
                }
              }
            }
          }
        }
      }
    },
    "branchInfo" : {
      "type" : "object",
      "properties" : {
        "branchName" : {
          "type" : "string",
          "example" : "Branch-123"
        },
        "agileWorkbenchItems" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/agileWorkBenchItems"
          }
        }
      }
    },
    "agileWorkBenchItems" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "string",
          "example" : "BUG-12345"
        },
        "description" : {
          "type" : "string",
          "example" : "Sample Bug"
        },
        "type" : {
          "type" : "string",
          "example" : "Bug"
        }
      }
    },
    "policies" : {
      "type" : "object",
      "properties" : {
        "data" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/policies_list"
          }
        }
      }
    },
    "policies_list" : {
      "type" : "object",
      "properties" : {
        "policyName" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "updatedBy" : {
          "type" : "string"
        },
        "createdBy" : {
          "type" : "string"
        },
        "updatedOn" : {
          "type" : "string"
        },
        "createdOn" : {
          "type" : "string"
        }
      }
    },
    "policy" : {
      "type" : "object",
      "properties" : {
        "policyName" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "updatedBy" : {
          "type" : "string"
        },
        "createdBy" : {
          "type" : "string"
        },
        "updatedOn" : {
          "type" : "string"
        },
        "createdOn" : {
          "type" : "string"
        },
        "data" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/policy_guardrails"
          }
        }
      }
    },
    "policy_guardrails" : {
      "type" : "object",
      "properties" : {
        "ID" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        }
      }
    },
    "policy_update" : {
      "type" : "object",
      "properties" : {
        "policyName" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "guardrails" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/guardrails"
          }
        }
      }
    },
    "policy_create" : {
      "type" : "object",
      "properties" : {
        "policyName" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "guardrails" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/guardrails"
          }
        }
      }
    },
    "guardrails" : {
      "type" : "object",
      "properties" : {
        "ID" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        }
      }
    }
  }
}